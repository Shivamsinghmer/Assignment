"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot, User, Loader2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { generateAiResponse, type AiResponseInput, type AiResponseOutput } from '@/ai/flows/generate-ai-response';
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const predefinedQuestions = [
  { id: "q1", text: "How does software license resale work?" },
  { id: "q2", text: "Is it legal to resell software licenses?" },
  { id: "q3", text: "What types of licenses can I sell?" },
  { id: "q4", text: "How do I list licenses on SoftSell?" },
  { id: "q5", text: "What are the fees for using SoftSell?" },
];

export default function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const addMessage = (text: string, sender: "user" | "ai") => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text, sender, timestamp: new Date() },
    ]);
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
       addMessage("Hello! I'm the SoftSell AI Assistant. How can I help you today? You can type a question or choose from the suggestions below.", "ai");
    }
  }, [isOpen]);


  const handleSend = async (queryText?: string) => {
    const text = queryText || inputValue;
    if (!text.trim() || isLoading) return;

    addMessage(text, "user");
    setInputValue("");
    setIsLoading(true);

    try {
      const aiInput: AiResponseInput = { query: text };
      const aiOutput: AiResponseOutput = await generateAiResponse(aiInput);
      addMessage(aiOutput.response, "ai");
    } catch (error) {
      console.error("Error fetching AI response:", error);
      addMessage("Sorry, I encountered an error. Please try again.", "ai");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
      >
        <Button
          size="icon"
          className="rounded-full w-14 h-14 shadow-lg bg-primary hover:bg-primary/90"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle AI Chat"
        >
          {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 w-[calc(100vw-3rem)] max-w-md"
          >
            <Card className="shadow-xl border-primary/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg font-semibold">AI Assistant</CardTitle>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                   <X className="h-5 w-5" />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-80 p-4" ref={scrollAreaRef}>
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={cn(
                          "flex items-end space-x-2",
                          msg.sender === "user" ? "justify-end" : "justify-start"
                        )}
                      >
                        {msg.sender === "ai" && (
                          <Avatar className="h-7 w-7 self-start">
                            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                              <Bot className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={cn(
                            "max-w-[75%] rounded-lg px-3 py-2 text-sm shadow-sm",
                            msg.sender === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {msg.text.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                           <p className="text-xs opacity-60 mt-1 text-right">
                            {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                         {msg.sender === "user" && (
                          <Avatar className="h-7 w-7 self-start">
                            <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                              <User className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex items-center space-x-2 justify-start">
                         <Avatar className="h-7 w-7 self-start">
                            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                              <Bot className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                        <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 text-sm shadow-sm flex items-center">
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          Typing...
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
                 <div className="p-2 border-t">
                  <p className="text-xs text-muted-foreground mb-2 px-2">Or try one of these:</p>
                  <div className="flex flex-wrap gap-2 px-2">
                    {predefinedQuestions.map((q) => (
                      <Button
                        key={q.id}
                        variant="outline"
                        size="sm"
                        className="text-xs h-auto py-1 px-2"
                        onClick={() => handleSend(q.text)}
                        disabled={isLoading}
                      >
                        <HelpCircle className="h-3 w-3 mr-1.5"/>
                        {q.text}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 border-t">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex w-full items-center space-x-2"
                >
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    <span className="sr-only">Send message</span>
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
