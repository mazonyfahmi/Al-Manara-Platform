import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Subscription } from "@/lib/types";
import { ArrowUpRight, BookCopy, Mail, Users } from "lucide-react";
import Link from "next/link";


const recentSubscriptions: Subscription[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890', course: 'تطوير الويب المتقدم', requestedDate: '2023-10-27', status: 'قيد الانتظار' },
  { id: '2', name: 'Bob Williams', email: 'bob@example.com', phone: '234-567-8901', course: 'مقدمة في علم البيانات', requestedDate: '2023-10-26', status: 'قيد الانتظار' },
  { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', phone: '345-678-9012', course: 'مبادئ تصميم واجهة المستخدم وتجربة المستخدم', requestedDate: '2023-10-26', status: 'قيد الانتظار' },
];

export default function AdminDashboardPage() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">إجمالي الطلاب</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,257</div>
                        <p className="text-xs text-muted-foreground">+120 عن الشهر الماضي</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">الدورات</CardTitle>
                        <BookCopy className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">6</div>
                        <p className="text-xs text-muted-foreground">+2 جديد هذا الربع</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">الاشتراكات المعلقة</CardTitle>
                        <Mail className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">تحتاج مراجعة</p>
                    </CardContent>
                </Card>
            </div>
            <Card>
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                    <CardTitle className="font-headline">طلبات الاشتراك الأخيرة</CardTitle>
                    <CardDescription>
                        طلبات جديدة من طلاب محتملين.
                    </CardDescription>
                    </div>
                    <Button asChild size="sm" className="mr-auto gap-1">
                    <Link href="/admin/subscriptions">
                        عرض الكل
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>الطالب</TableHead>
                                <TableHead>الدورة</TableHead>
                                <TableHead>التاريخ</TableHead>
                                <TableHead>الحالة</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentSubscriptions.map((sub) => (
                                <TableRow key={sub.id}>
                                    <TableCell>
                                        <div className="font-medium">{sub.name}</div>
                                        <div className="text-sm text-muted-foreground">{sub.email}</div>
                                    </TableCell>
                                    <TableCell>{sub.course}</TableCell>
                                    <TableCell>{sub.requestedDate}</TableCell>
                                    <TableCell><Badge variant="outline">{sub.status}</Badge></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
