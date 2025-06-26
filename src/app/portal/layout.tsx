'use client';

import Link from 'next/link';
import {
  Book,
  Home,
  LogOut,
  Settings,
  User,
  Video,
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
} from '@/components/ui/sidebar';
import Logo from '@/components/logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function PortalLayout({
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
                <Link href="/portal/dashboard">
                  <Home />
                  <span>لوحة التحكم</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="دوراتي">
                <Link href="/portal/courses">
                  <Book />
                  <span>دوراتي</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="المحاضرات المباشرة">
                <Link href="/portal/live/1">
                  <Video />
                  <span>المحاضرات المباشرة</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-2 p-2">
            <Avatar>
              <AvatarImage src="https://placehold.co/40x40.png" alt="User" data-ai-hint="student avatar" />
              <AvatarFallback>SN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
              <span className="font-semibold text-sm">اسم الطالب</span>
              <span className="text-xs text-muted-foreground">student@example.com</span>
            </div>
          </div>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="الملف الشخصي">
                <Link href="#">
                  <User />
                  <span>الملف الشخصي</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
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
           <SidebarTrigger />
           <h1 className="font-headline text-xl font-semibold">بوابة الطالب</h1>
        </header>
        <div className="p-4 md:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
