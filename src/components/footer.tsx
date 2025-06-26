import Link from 'next/link';
import Logo from './logo';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-muted-foreground">
              تمكين العقول من خلال تعليم عالي الجودة ومتاح للجميع.
            </p>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/courses" className="hover:text-primary transition-colors">الدورات</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">من نحن</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">اتصل بنا</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">تابعنا</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} منصة المنارة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
