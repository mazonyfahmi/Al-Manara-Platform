import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Student } from "@/lib/types";
import { MoreHorizontal, PlusCircle, Search } from "lucide-react";

const mockStudents: Student[] = [
    { id: '1', name: 'John Smith', email: 'john.smith@example.com', enrolledDate: '2023-01-15', courses: 3 },
    { id: '2', name: 'Emily Johnson', email: 'emily.j@example.com', enrolledDate: '2023-02-20', courses: 1 },
    { id: '3', name: 'Michael Brown', email: 'michael.b@example.com', enrolledDate: '2023-03-10', courses: 2 },
    { id: '4', name: 'Sarah Davis', email: 'sarah.d@example.com', enrolledDate: '2023-04-05', courses: 1 },
    { id: '5', name: 'David Wilson', email: 'david.w@example.com', enrolledDate: '2023-05-12', courses: 4 },
];

export default function AdminStudentsPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">الطلاب</CardTitle>
                <CardDescription>إدارة حسابات الطلاب وعرض تقدمهم.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="relative w-full md:w-1/3">
                        <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="ابحث عن الطلاب..." className="pr-8" />
                    </div>
                    <Button>
                        <PlusCircle className="ml-2 h-4 w-4" />
                        إضافة طالب
                    </Button>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>الاسم</TableHead>
                            <TableHead>البريد الإلكتروني</TableHead>
                            <TableHead>تاريخ التسجيل</TableHead>
                            <TableHead>الدورات</TableHead>
                            <TableHead><span className="sr-only">الإجراءات</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockStudents.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell className="font-medium">{student.name}</TableCell>
                                <TableCell>{student.email}</TableCell>
                                <TableCell>{student.enrolledDate}</TableCell>
                                <TableCell><Badge variant="secondary">{student.courses}</Badge></TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="start">
                                            <DropdownMenuLabel>الإجراءات</DropdownMenuLabel>
                                            <DropdownMenuItem>عرض التفاصيل</DropdownMenuItem>
                                            <DropdownMenuItem>تعديل</DropdownMenuItem>
                                            <DropdownMenuItem className="text-destructive">حذف</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
