import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function StudentLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <Logo className="mb-4 justify-center" />
          <CardTitle className="font-headline text-2xl">تسجيل دخول بوابة الطالب</CardTitle>
          <CardDescription>أدخل بياناتك للوصول إلى لوحة التحكم الخاصة بك.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input id="email" type="email" placeholder="student@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">كلمة المرور</Label>
                <Link href="#" className="mr-auto inline-block text-sm underline">
                  هل نسيت كلمة المرور؟
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button asChild type="submit" className="w-full">
              <Link href="/portal/dashboard">تسجيل الدخول</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/">العودة للرئيسية</Link>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
