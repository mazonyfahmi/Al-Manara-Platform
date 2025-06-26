import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Course } from "@/lib/types";
import { MoreHorizontal, PlusCircle, PlayCircle, StopCircle } from "lucide-react";

const mockCourses: Omit<Course, 'aiHint' | 'longDescription' | 'description' | 'imageUrl'>[] = [
    { id: '1', title: 'Advanced Web Development', instructor: 'Dr. Evelyn Reed', duration: '12 Weeks' },
    { id: '2', title: 'Introduction to Data Science', instructor: 'Prof. Kenji Tanaka', duration: '8 Weeks' },
    { id: '3', title: 'Digital Marketing Fundamentals', instructor: 'Aisha Khan', duration: '6 Weeks' },
    { id: '4', title: 'UI/UX Design Principles', instructor: 'Carlos Rodriguez', duration: '10 Weeks' },
    { id: '5', title: 'Cybersecurity for Beginners', instructor: 'Ben Carter', duration: '8 Weeks' },
    { id: '6', title: 'Project Management Professional (PMP)', instructor: 'Olivia Chen', duration: '14 Weeks' },
];

export default function AdminCoursesPage() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="font-headline">Courses</CardTitle>
                        <CardDescription>Manage courses and their content.</CardDescription>
                    </div>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Course
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Instructor</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>Live Status</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
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
                                        {index % 2 === 0 ? "Not Live" : "Live"}
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
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>Edit Course</DropdownMenuItem>
                                            <DropdownMenuItem>View Enrollments</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                <PlayCircle className="mr-2 h-4 w-4" />
                                                Start Live Lecture
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <StopCircle className="mr-2 h-4 w-4" />
                                                Stop Live Lecture
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-destructive">Delete Course</DropdownMenuItem>
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
