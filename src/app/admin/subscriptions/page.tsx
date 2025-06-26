import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Subscription } from "@/lib/types";
import { CheckCircle, MoreHorizontal, XCircle } from "lucide-react";

const mockSubscriptions: Subscription[] = [
    { id: '1', name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890', course: 'Advanced Web Development', requestedDate: '2023-10-27', status: 'Pending' },
    { id: '2', name: 'Bob Williams', email: 'bob@example.com', phone: '234-567-8901', course: 'Introduction to Data Science', requestedDate: '2023-10-26', status: 'Pending' },
    { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', phone: '345-678-9012', course: 'UI/UX Design Principles', requestedDate: '2023-10-26', status: 'Pending' },
    { id: '4', name: 'Diana Prince', email: 'diana@example.com', phone: '456-789-0123', course: 'Digital Marketing Fundamentals', requestedDate: '2023-10-25', status: 'Approved' },
    { id: '5', name: 'Ethan Hunt', email: 'ethan@example.com', phone: '567-890-1234', course: 'Cybersecurity for Beginners', requestedDate: '2023-10-24', status: 'Rejected' },
];

export default function AdminSubscriptionsPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Subscription Requests</CardTitle>
                <CardDescription>Review and manage new student subscriptions.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Applicant</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead>Course</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockSubscriptions.map((sub) => (
                            <TableRow key={sub.id}>
                                <TableCell className="font-medium">{sub.name}</TableCell>
                                <TableCell>
                                    <div>{sub.email}</div>
                                    <div className="text-sm text-muted-foreground">{sub.phone}</div>
                                </TableCell>
                                <TableCell>{sub.course}</TableCell>
                                <TableCell>{sub.requestedDate}</TableCell>
                                <TableCell>
                                    <Badge variant={sub.status === 'Approved' ? 'default' : sub.status === 'Rejected' ? 'destructive' : 'outline'}>
                                        {sub.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    {sub.status === 'Pending' && (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>
                                                <CheckCircle className="mr-2 h-4 w-4" />
                                                Approve
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <XCircle className="mr-2 h-4 w-4" />
                                                Reject
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
