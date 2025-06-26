import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Video } from "lucide-react";
import Link from "next/link";

const enrolledCourses = [
  { id: '1', title: 'Advanced Web Development', progress: 75, nextLecture: 'Tomorrow, 10:00 AM' },
  { id: '4', title: 'UI/UX Design Principles', progress: 40, nextLecture: 'Wednesday, 2:00 PM' },
];

export default function StudentDashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="font-headline text-3xl font-semibold">Welcome Back, Student!</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              My Courses in Progress
            </CardTitle>
            <CardDescription>Continue your learning journey.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {enrolledCourses.map(course => (
              <div key={course.id} className="p-3 bg-muted/50 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-semibold">{course.title}</h4>
                  <span className="text-sm font-medium text-primary">{course.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full" asChild>
                <Link href="/portal/courses">View All Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Video className="w-5 h-5" />
              Upcoming Live Lectures
            </CardTitle>
            <CardDescription>Don't miss your next class.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {enrolledCourses.map(course => (
                <div key={course.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                        <h4 className="font-semibold">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">{course.nextLecture}</p>
                    </div>
                    <Button size="sm" asChild>
                        <Link href={`/portal/live/${course.id}`}>Join Now</Link>
                    </Button>
                </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
