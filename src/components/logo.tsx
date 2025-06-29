import { BookOpenCheck } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      <BookOpenCheck className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold font-headline text-primary">
        Al-Manara
      </span>
    </Link>
  );
}
