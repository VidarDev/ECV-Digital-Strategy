'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle } from "lucide-react"

interface Message {
    id: number;
    text: string;
    isUser: boolean;
}

interface ChatbotProps {
    customResponses: { [key: string]: string };
}

const predefinedResponses = [
    "Comment puis-je vous aider ?",
    "En savoir plus sur nos services"
];

const Chatbot: React.FC<ChatbotProps> = ({ customResponses }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Bonjour ! Comment puis-je vous aider ?", isUser: false }
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (text: string) => {
        const newUserMessage: Message = {
            id: messages.length + 1,
            text,
            isUser: true
        };
        
        const botResponse = customResponses[text.toLowerCase()] || "Je ne comprends pas votre demande. Pouvez-vous reformuler ?";
        
        const newBotMessage: Message = {
            id: messages.length + 2,
            text: botResponse,
            isUser: false
        };

        setMessages([...messages, newUserMessage, newBotMessage]);
        setInputMessage("");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputMessage.trim()) {
            handleSendMessage(inputMessage);
        }
    };

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 rounded-full w-12 h-12 p-0"
                size="icon"
            >
                <MessageCircle className="h-6 w-6" />
            </Button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Suivi de livraison</DialogTitle>
                    </DialogHeader>
                    
                    <div className="flex flex-col gap-4">
                        <ScrollArea className="h-[400px] pr-4">
                            <div className="flex flex-col gap-4">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[70%] p-3 rounded-lg ${
                                                message.isUser
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'bg-muted'
                                            }`}
                                        >
                                            {message.text}
                                        </div>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>
                        </ScrollArea>

                        <div className="flex flex-wrap gap-2">
                            {predefinedResponses.map((response, index) => (
                                <Button
                                    key={index}
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => handleSendMessage(response)}
                                >
                                    {response}
                                </Button>
                            ))}
                        </div>
                        
                        <form onSubmit={handleSubmit} className="flex gap-2">
                            <Input
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Écrivez votre message..."
                                className="flex-1"
                            />
                            <Button type="submit">
                                Envoyer
                            </Button>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Chatbot;
