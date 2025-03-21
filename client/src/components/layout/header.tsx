import { Button } from "@/components/ui/button";
import { Info, Mail } from "lucide-react";

interface HeaderProps {
  onProjectClick: () => void;
  onContactClick: () => void;
}

export default function Header({ onProjectClick, onContactClick }: HeaderProps) {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-semibold text-xl">TheRightMind</div>
        
        <nav className="flex gap-4">
          <Button
            variant="ghost"
            onClick={onProjectClick}
            className="flex items-center gap-2"
          >
            <Info className="h-4 w-4" />
            Project Details
          </Button>
          
          <Button
            variant="ghost"
            onClick={onContactClick}
            className="flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
}
