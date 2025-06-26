'use client';

import Link from 'next/link';
import {
  Bell,
  BookCopy,
  LayoutDashboard,
  LogOut,
  Mail,
  Settings,
  Users,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarInset,
  SidebarFooter,
  SidebarTrigger,
  SidebarMenuBadge,
} from '@/components/ui/sidebar';
import Logo from '@/components/logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar side="right">
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="لوحة التحكم" isActive>
                <Link href="/admin/dashboard">
                  <LayoutDashboard />
                  <span>لوحة التحكم</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="الاشتراكات">
                <Link href="/admin/subscriptions">
                  <Mail />
                  <span>الاشتراكات</span>
                  <SidebarMenuBadge>3</SidebarMenuBadge>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="الدورات">
                <Link href="/admin/courses">
                  <BookCopy />
                  <span>الدورات</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="الطلاب">
                <Link href="/admin/students">
                  <Users />
                  <span>الطلاب</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-2 p-2">
            <Avatar>
              <AvatarImage src="https://placehold.co/40x40.png" alt="Admin" data-ai-hint="admin avatar" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
              <span className="font-semibold text-sm">مسؤول النظام</span>
              <span className="text-xs text-muted-foreground">admin@al-manara.com</span>
            </div>
          </div>
           <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="الإعدادات">
                <Link href="#">
                  <Settings />
                  <span>الإعدادات</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="تسجيل الخروج">
                <Link href="/">
                  <LogOut />
                  <span>تسجيل الخروج</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <h1 className="font-headline text-xl font-semibold">لوحة تحكم المسؤول</h1>
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">الإشعارات</span>
          </Button>
        </header>
        <div className="p-4 md:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
