import CourseCard from '@/components/course-card';
import Footer from '@/components/footer';
import Header from '@/components/header';
import type { Course } from '@/lib/types';

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'تطوير الويب المتقدم',
    description: 'إتقان تقنيات الويب الحديثة مثل React و Node.js و GraphQL.',
    longDescription: 'تغطي هذه الدورة الشاملة كل ما تحتاجه لتصبح مطور ويب متكامل. من أطر عمل الواجهة الأمامية إلى بنية الواجهة الخلفية، ستقوم ببناء مشاريع واقعية واكتساب خبرة عملية.',
    instructor: 'د. إيفلين ريد',
    duration: '12 أسبوعًا',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'web development'
  },
  {
    id: '2',
    title: 'مقدمة في علم البيانات',
    description: 'تعلم أساسيات تحليل البيانات والتصور والتعلم الآلي.',
    longDescription: 'ابدأ رحلتك في عالم البيانات. تقدم لك هذه الدورة مكتبات Python مثل Pandas و NumPy و Scikit-learn ، مما يمكنك من معالجة البيانات وبناء نماذج تنبؤية.',
    instructor: 'أ. كينجي تاناكا',
    duration: '8 أسابيع',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'data science'
  },
  {
    id: '3',
    title: 'أساسيات التسويق الرقمي',
    description: 'استكشف استراتيجيات تحسين محركات البحث والتسويق عبر محركات البحث وتسويق المحتوى ووسائل التواصل الاجتماعي.',
    longDescription: 'افهم مشهد التسويق الرقمي وتعلم كيفية إنشاء حملات فعالة. تغطي هذه الدورة كل شيء من تحسين محركات البحث إلى الإعلان على وسائل التواصل الاجتماعي.',
    instructor: 'عائشة خان',
    duration: '6 أسابيع',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'digital marketing'
  },
  {
    id: '4',
    title: 'مبادئ تصميم واجهة المستخدم وتجربة المستخدم',
    description: 'إتقان فن إنشاء واجهات مستخدم بديهية وجميلة.',
    longDescription: 'تعلم مبادئ التصميم المرتكز على المستخدم، من الإطارات السلكية والنماذج الأولية في Figma إلى إجراء أبحاث المستخدم واختبار قابلية الاستخدام. قم بإنشاء تجارب رقمية جذابة.',
    instructor: 'كارلوس رودريغيز',
    duration: '10 أسابيع',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'design principle'
  },
    {
    id: '5',
    title: 'الأمن السيبراني للمبتدئين',
    description: 'فهم أساسيات الأمن عبر الإنترنت واكتشاف التهديدات والوقاية منها.',
    longDescription: 'توفر هذه الدورة فهمًا أساسيًا لمفاهيم الأمن السيبراني، بما في ذلك أمن الشبكات والتشفير ومبادئ القرصنة الأخلاقية. احم نفسك ومؤسستك من التهديدات الرقمية.',
    instructor: 'بن كارتر',
    duration: '8 أسابيع',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'cyber security'
  },
  {
    id: '6',
    title: 'محترف إدارة المشاريع (PMP)',
    description: 'استعد لشهادة PMP مع هذه الدورة المتعمقة في إدارة المشاريع.',
    longDescription: 'تغطي هذه الدورة دورة حياة المشروع بأكملها، وتتوافق مع دليل PMBOK وتعدك لامتحان PMP. تعرف على بدء المشروع وتخطيطه وتنفيذه ومراقبته وإغلاقه.',
    instructor: 'أوليفيا تشين',
    duration: '14 أسبوعًا',
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
          <h1 className="font-headline text-4xl md:text-5xl font-bold">دوراتنا</h1>
          <p className="text-lg text-muted-foreground mt-2">ابحث عن الدورة المثالية لتطوير حياتك المهنية ومهاراتك.</p>
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
