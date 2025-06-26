import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Subscription } from "@/lib/types";
import { CheckCircle, MoreHorizontal, XCircle } from "lucide-react";

const mockSubscriptions: Subscription[] = [
    { id: '1', name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890', course: 'تطوير الويب المتقدم', requestedDate: '2023-10-27', status: 'قيد الانتظار' },
    { id: '2', name: 'Bob Williams', email: 'bob@example.com', phone: '234-567-8901', course: 'مقدمة في علم البيانات', requestedDate: '2023-10-26', status: 'قيد الانتظار' },
    { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', phone: '345-678-9012', course: 'مبادئ تصميم واجهة المستخدم وتجربة المستخدم', requestedDate: '2023-10-26', status: 'قيد الانتظار' },
    { id: '4', name: 'Diana Prince', email: 'diana@example.com', phone: '456-789-0123', course: 'أساسيات التسويق الرقمي', requestedDate: '2023-10-25', status: 'مقبول' },
    { id: '5', name: 'Ethan Hunt', email: 'ethan@example.com', phone: '567-890-1234', course: 'الأمن السيبراني للمبتدئين', requestedDate: '2023-10-24', status: 'مرفوض' },
];

export default function AdminSubscriptionsPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">طلبات الاشتراك</CardTitle>
                <CardDescription>مراجعة وإدارة اشتراكات الطلاب الجديدة.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>مقدم الطلب</TableHead>
                            <TableHead>جهة الاتصال</TableHead>
                            <TableHead>الدورة</TableHead>
                            <TableHead>التاريخ</TableHead>
                            <TableHead>الحالة</TableHead>
                            <TableHead><span className="sr-only">الإجراءات</span></TableHead>
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
                                    <Badge variant={sub.status === 'مقبول' ? 'default' : sub.status === 'مرفوض' ? 'destructive' : 'outline'}>
                                        {sub.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    {sub.status === 'قيد الانتظار' && (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="start">
                                            <DropdownMenuLabel>الإجراءات</DropdownMenuLabel>
                                            <DropdownMenuItem>
                                                <CheckCircle className="ml-2 h-4 w-4" />
                                                موافقة
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <XCircle className="ml-2 h-4 w-4" />
                                                رفض
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
