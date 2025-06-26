import CourseCard from '@/components/course-card';
import Footer from '@/components/footer';
import Header from '@/components/header';
import type { Course } from '@/lib/types';

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced Web Development',
    description: 'Master modern web technologies like React, Node.js, and GraphQL.',
    longDescription: 'This comprehensive course covers everything you need to become a full-stack web developer. From front-end frameworks to back-end architecture, you will build real-world projects and gain hands-on experience.',
    instructor: 'Dr. Evelyn Reed',
    duration: '12 Weeks',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'web development'
  },
  {
    id: '2',
    title: 'Introduction to Data Science',
    description: 'Learn the fundamentals of data analysis, visualization, and machine learning.',
    longDescription: 'Begin your journey into the world of data. This course introduces you to Python libraries like Pandas, NumPy, and Scikit-learn, enabling you to process data and build predictive models.',
    instructor: 'Prof. Kenji Tanaka',
    duration: '8 Weeks',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'data science'
  },
  {
    id: '3',
    title: 'Digital Marketing Fundamentals',
    description: 'Explore SEO, SEM, content marketing, and social media strategies.',
    longDescription: 'Understand the digital marketing landscape and learn how to create effective campaigns. This course covers everything from search engine optimization to social media advertising.',
    instructor: 'Aisha Khan',
    duration: '6 Weeks',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'digital marketing'
  },
  {
    id: '4',
    title: 'UI/UX Design Principles',
    description: 'Master the art of creating intuitive and beautiful user interfaces.',
    longDescription: 'Learn the principles of user-centered design, from wireframing and prototyping in Figma to conducting user research and usability testing. Create engaging digital experiences.',
    instructor: 'Carlos Rodriguez',
    duration: '10 Weeks',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'design principle'
  },
    {
    id: '5',
    title: 'Cybersecurity for Beginners',
    description: 'Understand the basics of online security, threat detection, and prevention.',
    longDescription: 'This course provides a foundational understanding of cybersecurity concepts, including network security, cryptography, and ethical hacking principles. Protect yourself and your organization from digital threats.',
    instructor: 'Ben Carter',
    duration: '8 Weeks',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'cyber security'
  },
  {
    id: '6',
    title: 'Project Management Professional (PMP)',
    description: 'Prepare for the PMP certification with this in-depth course on project management.',
    longDescription: 'Covering the entire project lifecycle, this course aligns with the PMBOK Guide and prepares you for the PMP exam. Learn about project initiation, planning, execution, monitoring, and closing.',
    instructor: 'Olivia Chen',
    duration: '14 Weeks',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'project management'
  },
];

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Courses</h1>
          <p className="text-lg text-muted-foreground mt-2">Find the perfect course to advance your career and skills.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
