import { Award } from "lucide-react";

export function ArtisanalBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-full shadow-lg">
      <Award className="w-5 h-5" />
      <span className="font-semibold">100% Artesanal</span>
    </div>
  );
}
