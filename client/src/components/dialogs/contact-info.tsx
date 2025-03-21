import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

interface ContactInfoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactInfoDialog({ open, onOpenChange }: ContactInfoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>
            You can connect with us through various channels
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => window.open('mailto:anmol158@uw.edu')}
          >
            <Mail className="h-4 w-4" />
            anmol158@uw.edu
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => window.open('https://github.com/Anmol-Sh')}
          >
            <Github className="h-4 w-4" />
            GitHub Profile
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => window.open('https://www.linkedin.com/in/anmol-sharma-387137141/')}
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn Profile
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => window.open('https://anmol-sh.github.io/profilepage/')}
          >
            Personal Profile Page
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
