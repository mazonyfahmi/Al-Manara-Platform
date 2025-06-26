import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Course } from "@/lib/types";
import { MoreHorizontal, PlusCircle, PlayCircle, StopCircle } from "lucide-react";

const mockCourses: Omit<Course, 'aiHint' | 'longDescription' | 'description' | 'imageUrl'>[] = [
    { id: '1', title: 'تطوير الويب المتقدم', instructor: 'د. إيفلين ريد', duration: '12 أسبوعًا' },
    { id: '2', title: 'مقدمة في علم البيانات', instructor: 'أ. كينجي تاناكا', duration: '8 أسابيع' },
    { id: '3', title: 'أساسيات التسويق الرقمي', instructor: 'عائشة خان', duration: '6 أسابيع' },
    { id: '4', title: 'مبادئ تصميم واجهة المستخدم وتجربة المستخدم', instructor: 'كارلوس رودريغيز', duration: '10 أسابيع' },
    { id: '5', title: 'الأمن السيبراني للمبتدئين', instructor: 'بن كارتر', duration: '8 أسابيع' },
    { id: '6', title: 'محترف إدارة المشاريع (PMP)', instructor: 'أوليفيا تشين', duration: '14 أسبوعًا' },
];

export default function AdminCoursesPage() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="font-headline">الدورات</CardTitle>
                        <CardDescription>إدارة الدورات ومحتواها.</CardDescription>
                    </div>
                    <Button>
                        <PlusCircle className="ml-2 h-4 w-4" />
                        إضافة دورة
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>العنوان</TableHead>
                            <TableHead>المحاضر</TableHead>
                            <TableHead>المدة</TableHead>
                            <TableHead>حالة البث المباشر</TableHead>
                            <TableHead><span className="sr-only">الإجراءات</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockCourses.map((course, index) => (
                            <TableRow key={course.id}>
                                <TableCell className="font-medium">{course.title}</TableCell>
                                <TableCell>{course.instructor}</TableCell>
                                <TableCell>{course.duration}</TableCell>
                                <TableCell>
                                    <Badge variant={index % 2 === 0 ? "destructive" : "secondary"}>
                                        {index % 2 === 0 ? "غير مباشر" : "مباشر"}
                                    </Badge>
                                </TableCell>
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
                                            <DropdownMenuItem>تعديل الدورة</DropdownMenuItem>
                                            <DropdownMenuItem>عرض المسجلين</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                <PlayCircle className="ml-2 h-4 w-4" />
                                                بدء محاضرة مباشرة
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <StopCircle className="ml-2 h-4 w-4" />
                                                إيقاف محاضرة مباشرة
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-destructive">حذف الدورة</DropdownMenuItem>
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
