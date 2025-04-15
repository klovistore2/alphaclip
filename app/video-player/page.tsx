import { Suspense } from 'react';
import VideoPlayerClient from './VideoPlayerClient'; // Adapter le chemin
import LoadingSpinner from './LoadingSpinner'; // Adapter le chemin

// Optionnel: Ajouter des métadonnées si nécessaire
// export const metadata = { title: "Lecteur Vidéo" };

export default function VideoPlayerPage() {
  return (
    // Envelopper le composant client avec Suspense
    // Le fallback s'affichera pendant que useSearchParams est lu côté client
    <Suspense fallback={<LoadingSpinner message="Chargement des paramètres..." />}>
      <VideoPlayerClient />
    </Suspense>
  );
}