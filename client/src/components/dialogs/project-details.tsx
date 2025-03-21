import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDetailsDialog({ open, onOpenChange }: ProjectDetailsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>About the Project</DialogTitle>
          <DialogDescription>
            TheRightMind is a AI service to assist in planning and creating artistic media content.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-2">Overview</h3>
              <p className="text-muted-foreground">
                This is a modern web application built with React and Javascript, 
                featuring a clean and professional design with interactive components.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Gemini Integration</li>
                <li>Modern React Architecture</li>
                <li>Responsive Design</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Technology Stack</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>React with Javascript</li>
                <li>Flask app as backend service</li>
                <li>Gemini 2.0 Flash Experimental model</li>
              </ul>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
