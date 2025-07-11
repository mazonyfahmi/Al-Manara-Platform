import Footer from '@/components/footer';
import Header from '@/components/header';
import { SubscriptionForm } from '@/components/subscription-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SubscribePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl">الاشتراك في دورة</CardTitle>
            <CardDescription>
              املأ النموذج أدناه لبدء رحلتك التعليمية معنا.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SubscriptionForm />
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
