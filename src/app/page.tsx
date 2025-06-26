import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpenCheck, GraduationCap, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-4">
              أطلق العنان لإمكانياتك مع المنارة
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              انضم إلى مجتمع من المتعلمين والخبراء. احصل على دورات عالية الجودة عبر الإنترنت وحقق أهدافك الشخصية والمهنية.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/courses">استكشف الدورات</Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
              لماذا تختار المنارة؟
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <GraduationCap className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline pt-4">محاضرون خبراء</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">تعلم من قادة الصناعة والمهنيين المعتمدين الشغوفين بالتدريس.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <BookOpenCheck className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline pt-4">تعلم مرن</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">الوصول إلى دوراتك في أي وقت وفي أي مكان. تعلم بالسرعة التي تناسبك مع محاضراتنا عند الطلب.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline pt-4">مجتمع نابض بالحياة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">تواصل مع زملائك الطلاب، وشارك المعرفة، وتعاون في المشاريع في بوابتنا.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
              هل أنت مستعد لبدء رحلتك التعليمية؟
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              تصفح كتالوجنا الشامل للدورات وابحث عن الدورة المثالية لك.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <Link href="/courses">عرض جميع الدورات</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
