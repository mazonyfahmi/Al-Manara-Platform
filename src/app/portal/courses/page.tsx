import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Course } from "@/lib/types";

const mockCourses: Omit<Course, 'aiHint' | 'longDescription' | 'description'>[] = [
  { id: '1', title: 'Advanced Web Development', instructor: 'Dr. Evelyn Reed', duration: '12 Weeks', imageUrl: 'https://placehold.co/600x400.png' },
  { id: '4', title: 'UI/UX Design Principles', instructor: 'Carlos Rodriguez', duration: '10 Weeks', imageUrl: 'https://placehold.co/600x400.png' },
  { id: '2', title: 'Introduction to Data Science', instructor: 'Prof. Kenji Tanaka', duration: '8 Weeks', imageUrl: 'https://placehold.co/600x400.png' },
];

export default function MyCoursesPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">My Enrolled Courses</CardTitle>
                <CardDescription>Here are all the courses you are currently enrolled in.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Course Title</TableHead>
                            <TableHead>Instructor</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockCourses.map((course) => (
                            <TableRow key={course.id}>
                                <TableCell className="font-medium">{course.title}</TableCell>
                                <TableCell>{course.instructor}</TableCell>
                                <TableCell>{course.duration}</TableCell>
                                <TableCell><Badge variant="secondary">In Progress</Badge></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
