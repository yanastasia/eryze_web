"use client";
import { Folder } from "lucide-react";

type FolderItem = {
  name: string;
  items: string[];
};

type PixelFolderGridProps = {
  folders: FolderItem[];
  onOpen: (name: string) => void;
};

export default function PixelFolderGrid({ folders, onOpen }: PixelFolderGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {folders.map((f) => (
        <button key={f.name} onClick={() => onOpen(f.name)} className="group flex items-center gap-2 rounded-sm border border-white/20 bg-black/60 px-3 py-2 text-sm hover:bg-white/5">
          <Folder size={14} className="opacity-80" />
          <span>{f.name}</span>
        </button>
      ))}
    </div>
  );
}