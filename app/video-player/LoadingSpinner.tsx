// components/LoadingSpinner.tsx (Exemple simple)
import { Loader2 } from "lucide-react";

export default function LoadingSpinner({ message = "Chargement..." }: { message?: string }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader2 className="h-8 w-8 animate-spin mr-2" />
      <span>{message}</span>
    </div>
  );
}