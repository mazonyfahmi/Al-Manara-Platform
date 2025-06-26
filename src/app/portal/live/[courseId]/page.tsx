import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, VideoOff } from "lucide-react";

export default function LiveLecturePage({ params }: { params: { courseId: string } }) {
    return (
        <div className="flex flex-col md:flex-row h-[calc(100vh-10rem)] gap-4">
            <div className="flex-grow bg-black rounded-lg flex flex-col items-center justify-center text-white relative">
                <VideoOff className="w-16 h-16 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">Live lecture has not started or has ended.</p>
                <div className="absolute top-4 left-4">
                    <h2 className="font-headline text-2xl">Advanced Web Development</h2>
                </div>
            </div>
            <div className="w-full md:w-80 flex flex-col border rounded-lg p-4 bg-card">
                 <h3 className="font-headline text-lg mb-4">Live Chat</h3>
                 <ScrollArea className="flex-grow pr-4 mb-4">
                    <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-2">
                             <Avatar className="w-8 h-8">
                                <AvatarFallback>IR</AvatarFallback>
                            </Avatar>
                            <div>
                                <span className="font-semibold">Instructor</span>
                                <p className="bg-muted p-2 rounded-md">Welcome everyone! Today we'll be covering state management in React.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-2">
                             <Avatar className="w-8 h-8">
                                <AvatarFallback>S1</AvatarFallback>
                            </Avatar>
                            <div>
                                <span className="font-semibold">Student 1</span>
                                <p className="bg-muted p-2 rounded-md">Looking forward to it!</p>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
                 <form className="flex gap-2">
                    <Input placeholder="Ask a question..." />
                    <Button size="icon" type="submit" className="bg-accent hover:bg-accent/90"><Send className="h-4 w-4" /></Button>
                 </form>
            </div>
        </div>
    )
}
