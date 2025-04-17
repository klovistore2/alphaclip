// ./app/[lang]/dashboard/create/canva/components/FabricCanvas.tsx
'use client'

import React, { useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from 'next/navigation'; // Importer useRouter
import { saveDrawingAction } from '@/lib/actions/drawingActions'; // Adapter le chemin si nécessaire

// --- Helper Function pour convertir Data URL en File ---
function dataURLtoFile(dataurl: string, filename: string): File | null {
    const arr = dataurl.split(',');
    if (!arr[0]) return null;
    const mimeMatch = arr[0].match(/:(.*?);/);
    if (!mimeMatch || !mimeMatch[1]) return null;
    const mime = mimeMatch[1];
    try {
        const bstr = atob(arr[arr.length - 1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    } catch (error) {
        console.error("Failed to decode base64 string:", error);
        return null;
    }
}
// ------------------------------------------------------

// --- Interface pour les Props du Composant ---
import { Localy, TypeDictionary } from '@/app/[lang]/dictionaries';

interface FabricCanvasProps {
    lang: Localy; // Pour construire l'URL de redirection
    dictionary?: TypeDictionary; // Dictionnaire de traductions
}
// -------------------------------------------

// --- Définition UNIQUE et CORRIGÉE du Composant ---
const FabricCanvas: React.FC<FabricCanvasProps> = ({ lang, dictionary }) => {
    // --- Hooks (Refs, State, Router) ---
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fabricCanvasRef = useRef<fabric.Canvas | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const [activeTool, setActiveTool] = useState<'select' | 'pen'>('select');
    const [penWidth, setPenWidth] = useState<number>(2);
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [saveMessage, setSaveMessage] = useState<string | null>(null);
    const router = useRouter(); // Initialiser le routeur ici
    
    // Utiliser le dictionnaire passé en prop
    const dict = dictionary;

    // --- Effet Principal (Setup + Keydown Listener) ---
    useEffect(() => {
        if (canvasRef.current && canvasContainerRef.current) {
            const canvasElement = canvasRef.current;
            const containerElement = canvasContainerRef.current;

            if (fabricCanvasRef.current) { fabricCanvasRef.current.dispose(); } // Dispose si re-rendu

            const canvas = new fabric.Canvas(canvasElement, { backgroundColor: 'white' });
            fabricCanvasRef.current = canvas;

            const resizeCanvas = () => {
                if (containerElement && fabricCanvasRef.current) {
                    // Lit la taille calculée du conteneur (qui est limité par max-w et aspect-square)
                    const { clientWidth, clientHeight } = containerElement;
                    // Applique cette taille au canevas Fabric
                    fabricCanvasRef.current.setWidth(clientWidth);
                    fabricCanvasRef.current.setHeight(clientHeight);
                    fabricCanvasRef.current.renderAll(); // Redessine avec la nouvelle taille
                    console.log(`Canvas resized to: ${clientWidth}x${clientHeight}`);
                }
            };

            // Utilise ResizeObserver pour détecter les changements de taille du CONTENEUR
            // C'est plus fiable que 'resize' de window pour ce cas
 
            const resizeObserver = new ResizeObserver(resizeCanvas);
            resizeObserver.observe(containerElement);
            resizeCanvas();

            const handleKeyDown = (event: KeyboardEvent) => {
                // Vérifie si le canevas existe
                if (!fabricCanvasRef.current) return;

                if (activeTool !== 'select') return;

                 // Vérifie si la touche est Delete ou Backspace
                if (event.key === 'Delete' || event.key === 'Backspace') {
                    const activeObject = fabricCanvasRef.current.getActiveObject();

                    // Vérifie si un objet (ou un groupe) est sélectionné
                    if (activeObject) {
                        // Si c'est une sélection multiple (groupe)
                        // Note: _objects est une propriété interne mais couramment utilisée pour ActiveSelection
                        if (activeObject.type === 'activeSelection') {
                            // Cast vers le type spécifique pour accéder à _objects en toute sécurité (type-safe)
                            const activeSelection = activeObject as fabric.ActiveSelection;
                            if (activeSelection._objects) { // Vérifie que _objects existe
                                activeSelection._objects.forEach(obj => {
                                    fabricCanvasRef.current?.remove(obj);
                                });
                            }
                        } else {
                            // C'est un objet unique
                            fabricCanvasRef.current.remove(activeObject);
                        }
                        // Désélectionne tout
                        fabricCanvasRef.current.discardActiveObject();
                        // Redessine le canevas
                        fabricCanvasRef.current.renderAll();

                        console.log('Object(s) deleted');
                         // Optionnel: Empêche le comportement par défaut (ex: retour arrière dans le navigateur)
                        // event.preventDefault();
                    }
                }
            };
            window.addEventListener('keydown', handleKeyDown);

            // Nettoyage
            return () => {
                resizeObserver.unobserve(containerElement);
                window.removeEventListener('keydown', handleKeyDown);
                if (fabricCanvasRef.current) {
                    fabricCanvasRef.current.dispose();
                    fabricCanvasRef.current = null;
                }
                console.log("Fabric canvas disposed on cleanup");
            };
        }
    }, [activeTool]); // Ajout de la dépendance manquante



        // Fonction pour activer le mode Sélection
        const activateSelectMode = () => {
            if (!fabricCanvasRef.current) return;
            fabricCanvasRef.current.isDrawingMode = false; // Désactive le mode dessin
            setActiveTool('select'); // Met à jour l'état
            console.log("Switched to Select mode");
        };
    
        // Fonction pour activer le mode Stylo avec une épaisseur donnée
        const activatePen = (width: number) => {
            if (!fabricCanvasRef.current) return;
            fabricCanvasRef.current.isDrawingMode = true; // Active le mode dessin
            fabricCanvasRef.current.freeDrawingBrush.color = 'black'; // Toujours noir
            fabricCanvasRef.current.freeDrawingBrush.width = width; // Applique l'épaisseur choisie
            setPenWidth(width); // Met à jour l'état de l'épaisseur
            setActiveTool('pen'); // Met à jour l'état de l'outil
            console.log(`Switched to Pen mode with width: ${width}`);
        };
    
        const ensureSelectMode = (callback: () => void) => {
            // Appelle la nouvelle fonction pour passer en mode sélection
            activateSelectMode();
            // Le setTimeout est toujours utile pour décaler l'exécution du callback
            setTimeout(callback, 0);
        };
    
        const addRectangle = () => {
            // Utilise ensureSelectMode maintenant
            ensureSelectMode(() => {
                if (!fabricCanvasRef.current) return;
                const rect = new fabric.Rect({
                    left: 100, top: 100,
                    fill: 'black', // Couleur noire opaque
                    width: 80, height: 80,
                    selectable: true, hasControls: true, hasBorders: true,
                });
                fabricCanvasRef.current.add(rect);
                fabricCanvasRef.current.setActiveObject(rect);
                fabricCanvasRef.current.renderAll();
                console.log("Rectangle added");
            });
        };
    
        // Nouvelle fonction pour ajouter un cercle
            const addCircle = () => {
                ensureSelectMode(() => {
                    if (!fabricCanvasRef.current) return;
                    const circle = new fabric.Circle({
                        left: 120, top: 120, // Position légèrement différente
                        radius: 40, // Rayon du cercle
                        fill: 'black',
                        selectable: true, hasControls: true, hasBorders: true,
                    });
                    fabricCanvasRef.current.add(circle);
                    fabricCanvasRef.current.setActiveObject(circle);
                    fabricCanvasRef.current.renderAll();
                    console.log("Circle added");
                });
            };
    
    
            // Nouvelle fonction pour ajouter un triangle
            const addTriangle = () => {
            ensureSelectMode(() => {
            if (!fabricCanvasRef.current) return;
            const triangle = new fabric.Triangle({
                left: 140, top: 140,
                width: 80, // Base du triangle
                height: 70, // Hauteur du triangle
                fill: 'black',
                selectable: true, hasControls: true, hasBorders: true,
            });
            fabricCanvasRef.current.add(triangle);
            fabricCanvasRef.current.setActiveObject(triangle);
            fabricCanvasRef.current.renderAll();
            console.log("Triangle added");
            });
            };
    
    
            // Nouvelle fonction pour ajouter une ligne (barre)
        const addLine = () => {
        ensureSelectMode(() => {
           if (!fabricCanvasRef.current) return;
           const line = new fabric.Line(
               [50, 150, 250, 150], // Coordonnées [x1, y1, x2, y2] -> ligne horizontale
               {
                   stroke: 'black', // Couleur de la ligne
                   strokeWidth: 4, // Épaisseur de la ligne
                   selectable: true, hasControls: true, hasBorders: false, // Les bordures sont moins utiles pour une ligne
                   // Les lignes n'ont pas de 'fill'
               }
           );
           fabricCanvasRef.current.add(line);
           fabricCanvasRef.current.setActiveObject(line);
           fabricCanvasRef.current.renderAll();
           console.log("Line added");
       });
    };
    
    
    const handleImageUploadClick = () => {
        activateSelectMode(); // Passe en mode sélection avant d'ouvrir la boîte de dialogue
        fileInputRef.current?.click();
    };
    
        const handleImageFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
           // ... code identique ...
           const file = event.target.files?.[0];
            if (file && fabricCanvasRef.current) {
                const reader = new FileReader();
    
                reader.onload = (f) => {
                    const data = f.target?.result as string;
                    fabric.Image.fromURL(data, (img) => {
                        const maxSize = 400;
                        if (img.width && img.height) {
                             if (img.width > maxSize || img.height > maxSize) {
                                 img.scaleToWidth(img.width > img.height ? maxSize : (maxSize * img.width) / img.height);
                             }
                        }
                        img.set({
                            left: 50, top: 50,
                            selectable: true, hasControls: true, hasBorders: true,
                        });
                        fabricCanvasRef.current?.add(img);
                        fabricCanvasRef.current?.setActiveObject(img);
                        fabricCanvasRef.current?.renderAll();
                        console.log("Image added");
                    });
                };
                reader.readAsDataURL(file);
                event.target.value = '';
            }
        };
   
   
   
   
    // --- Fonction de Sauvegarde ---
    const handleSave = async () => {
        if (!fabricCanvasRef.current || isSaving || !dict) return;
        setIsSaving(true);
        setSaveMessage(dict.canva.save_in_progress);
        try {
            const canvas = fabricCanvasRef.current;
            const imageDataUrl = canvas.toDataURL({ format: 'png', quality: 0.9 });
            if (!imageDataUrl) throw new Error("Impossible de générer l'image.");

            const filename = `drawing-${Date.now()}.png`;
            const imageFile = dataURLtoFile(imageDataUrl, filename);
            if (!imageFile) throw new Error("Impossible de créer le fichier image.");

            const canvasState = JSON.stringify(canvas.toObject());

            const result = await saveDrawingAction(imageFile, canvasState);

            if (result?.success && result.drawingId) {
                setSaveMessage(dict.canva.save_success);
                router.push(`/${lang}/dashboard/image2image/scribble/${result.drawingId}`);
                // Pas besoin de setIsSaving(false) ici, la navigation se produit
            } else {
                 throw new Error(result?.error || "Erreur inconnue lors de la sauvegarde.");
            }
        } catch (error) {
            console.error("Save failed:", error);
            setSaveMessage(`${dict.canva.save_error}${error instanceof Error ? error.message : String(error)}`);
            setIsSaving(false); // Termine le chargement seulement en cas d'erreur
            setTimeout(() => setSaveMessage(null), 5000);
        }
    };

    // --- Rendu JSX ---
    return (
        <div className="flex flex-col h-full w-full max-h-full max-w-full">
            {/* Barre d'outils */}
            {dict && (
            <div className="flex gap-2 p-2 border-b bg-background shrink-0 items-center flex-wrap">
                {/* Bouton Sélection */}
                <Button variant={activeTool === 'select' ? "secondary" : "outline"} size="sm" onClick={activateSelectMode} disabled={isSaving}>
                    {dict.canva.selection}
                </Button>

                {/* Menu Déroulant Stylo */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={activeTool === 'pen' ? "secondary" : "outline"} size="sm" disabled={isSaving}>
                            {dict.canva.pen}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>{dict.canva.thickness}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onSelect={() => activatePen(1)} disabled={isSaving}>
                            {dict.canva.thin} {penWidth === 1 && activeTool === 'pen' && "✓"}
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => activatePen(3)} disabled={isSaving}>
                            {dict.canva.medium} {penWidth === 3 && activeTool === 'pen' && "✓"}
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => activatePen(8)} disabled={isSaving}>
                            {dict.canva.thick} {penWidth === 8 && activeTool === 'pen' && "✓"}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Menu Déroulant Formes */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" disabled={isSaving}>
                            {dict.canva.shapes}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={addRectangle} disabled={isSaving}>
                            {dict.canva.square}
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={addCircle} disabled={isSaving}>
                            {dict.canva.circle}
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={addTriangle} disabled={isSaving}>
                            {dict.canva.triangle}
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={addLine} disabled={isSaving}>
                            {dict.canva.line}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Bouton Importer Image */}
                <Button variant="outline" size="sm" onClick={handleImageUploadClick} disabled={isSaving}>
                    {dict.canva.import_image}
                </Button>
                <Input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageFileChange} className="hidden" />

                {/* Bouton Enregistrer */}
                <Button variant="default" size="sm" onClick={handleSave} disabled={isSaving}>
                    {isSaving ? dict.canva.saving : dict.canva.save}
                </Button>

                {/* Message de sauvegarde */}
                {saveMessage && <span className="text-sm ml-2 text-muted-foreground">{saveMessage}</span>}
            </div>
            )}

            {/* Conteneur DU CANEVAS */}
            <div
                ref={canvasContainerRef}
                className="relative w-full max-w-4xl aspect-video shadow-xl overflow-hidden bg-white border-2 border-gray-300 dark:border-gray-700 mx-auto my-4" // Ratio 16:9 et bordures améliorées
            >
                <canvas ref={canvasRef} className="w-full h-full" />
            </div>
        </div>
    );
}; // <--- FIN UNIQUE du composant

export default FabricCanvas;