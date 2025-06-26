'use client';

import Link from 'next/link';
import Logo from './logo';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/courses', label: 'الدورات' },
  { href: '/portal/login', label: 'بوابة الطالب' },
  { href: '/admin/login', label: 'لوحة التحكم' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">تبديل قائمة التنقل</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 pt-10">
                <Logo />
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Button
                      key={link.href}
                      variant="ghost"
                      asChild
                      className="justify-start text-lg font-medium"
                    >
                      <Link href={link.href} onClick={handleLinkClick}>
                        {link.label}
                      </Link>
                    </Button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
