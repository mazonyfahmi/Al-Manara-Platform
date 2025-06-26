'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { MessageSquare, Send } from 'lucide-react';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="default"
          className="fixed bottom-4 right-4 h-16 w-16 rounded-full shadow-lg bg-accent hover:bg-accent/90"
        >
          <MessageSquare className="h-8 w-8 text-accent-foreground" />
          <span className="sr-only">Open live chat</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-headline">Live Chat Support</SheetTitle>
        </SheetHeader>
        <div className="flex-grow flex flex-col mt-4">
          <ScrollArea className="flex-grow h-full pr-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src="https://placehold.co/40x40.png" alt="Support Agent" data-ai-hint="support agent" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="bg-muted p-3 rounded-lg max-w-xs">
                  <p>Hello! How can I help you today?</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-xs">
                  <p>I have a question about a course.</p>
                </div>
                <Avatar>
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </ScrollArea>
          <form className="mt-4 flex gap-2">
            <Input type="text" placeholder="Type your message..." className="flex-grow" />
            <Button type="submit" size="icon" className="bg-accent hover:bg-accent/90">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
