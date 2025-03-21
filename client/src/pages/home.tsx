import Header from "@/components/layout/header";
import { ProjectDetailsDialog } from "@/components/dialogs/project-details";
import { ContactInfoDialog } from "@/components/dialogs/contact-info";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [imgResponse, setImageResponse] = useState("");

  const chatMutation = useMutation({
    mutationFn: async (message: string) => {
      setChatResponse("");
      setImageResponse("");
      const response = await apiRequest('POST', 'http://127.0.0.1:5000/chat', { "message": message });
      const data = await response.json();
      return data;
    },
    onSuccess: (data) => {
      if ("message" in data) {
        if ("img" in data["message"]){
          setImageResponse(data["message"]["img"]);
        }
        else {
          setChatResponse(data["message"]["text"]);
        }
      }
      else {
        setChatResponse(`Error: ${data["error"]}`)
      }
      
    },
    onError: (error) => {
      setChatResponse(`Error: ${error.message}`);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      chatMutation.mutate(inputMessage);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onProjectClick={() => setShowProjectDetails(true)}
        onContactClick={() => setShowContactInfo(true)}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-6">
            Welcome to TheRightMind Project
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We can help you with some of your creative work.
          </p>

          <div className="max-w-2xl mx-auto mt-12">
            <h2 className="text-2xl font-semibold mb-4">How may I help you today?</h2>

            <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1"
              />
              <Button 
                type="submit" 
                disabled={chatMutation.isPending}
              >
                {chatMutation.isPending ? "Sending..." : "Send"}
              </Button>
            </form>

            {chatResponse && (
              <div className="mt-6 p-4 bg-muted rounded-lg text-left">
                <p className="text-muted-foreground">
                  <ReactMarkdown>{chatResponse}</ReactMarkdown>
                </p>
              </div>
            )}

            {imgResponse && (
              <div>
                <img src={imgResponse} alt={imgResponse}></img>
              </div>
            )}
          </div>
        </div>
      </main>

      <ProjectDetailsDialog 
        open={showProjectDetails} 
        onOpenChange={setShowProjectDetails} 
      />

      <ContactInfoDialog 
        open={showContactInfo} 
        onOpenChange={setShowContactInfo}
      />
    </div>
  );
}