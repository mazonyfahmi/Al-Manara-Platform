import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Course } from "@/lib/types";

const mockCourses: Omit<Course, 'aiHint' | 'longDescription' | 'description'>[] = [
  { id: '1', title: 'تطوير الويب المتقدم', instructor: 'د. إيفلين ريد', duration: '12 أسبوعًا', imageUrl: 'https://placehold.co/600x400.png' },
  { id: '4', title: 'مبادئ تصميم واجهة المستخدم وتجربة المستخدم', instructor: 'كارلوس رودريغيز', duration: '10 أسابيع', imageUrl: 'https://placehold.co/600x400.png' },
  { id: '2', title: 'مقدمة في علم البيانات', instructor: 'أ. كينجي تاناكا', duration: '8 أسابيع', imageUrl: 'https://placehold.co/600x400.png' },
];

export default function MyCoursesPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">دوراتي المسجلة</CardTitle>
                <CardDescription>هنا جميع الدورات التي أنت مسجل بها حاليًا.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>عنوان الدورة</TableHead>
                            <TableHead>المحاضر</TableHead>
                            <TableHead>المدة</TableHead>
                            <TableHead>الحالة</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockCourses.map((course) => (
                            <TableRow key={course.id}>
                                <TableCell className="font-medium">{course.title}</TableCell>
                                <TableCell>{course.instructor}</TableCell>
                                <TableCell>{course.duration}</TableCell>
                                <TableCell><Badge variant="secondary">قيد التقدم</Badge></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
