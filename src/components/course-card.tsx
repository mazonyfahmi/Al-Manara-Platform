import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Course } from '@/lib/types';

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <Image
          src={course.imageUrl}
          alt={course.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
          data-ai-hint={course.aiHint}
        />
        <div className="p-6">
          <CardTitle className="font-headline text-xl mb-2">{course.title}</CardTitle>
          <CardDescription>{course.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/subscribe">Subscribe Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
