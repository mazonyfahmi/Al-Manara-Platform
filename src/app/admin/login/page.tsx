import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <Logo className="mb-4 justify-center" />
          <CardTitle className="font-headline text-2xl">تسجيل دخول لوحة تحكم المسؤول</CardTitle>
          <CardDescription>للموظفين المصرح لهم فقط.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input id="email" type="email" placeholder="admin@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input id="password" type="password" required />
            </div>
            <Button asChild type="submit" className="w-full">
              <Link href="/admin/dashboard">تسجيل الدخول</Link>
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
