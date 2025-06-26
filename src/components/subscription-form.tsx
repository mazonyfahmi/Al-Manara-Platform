'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { handleSubscription } from '@/lib/actions';
import { ar } from 'date-fns/locale';

const formSchema = z.object({
  name: z.string().min(2, { message: 'يجب أن يتكون الاسم من حرفين على الأقل.' }),
  email: z.string().email({ message: 'الرجاء إدخال عنوان بريد إلكتروني صالح.' }),
  phone: z.string().min(10, { message: 'يجب أن يتكون رقم الهاتف من 10 أرقام على الأقل.' }),
  startDate: z.date({
    required_error: 'تاريخ البدء المفضل مطلوب.',
  }),
});

export function SubscriptionForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await handleSubscription(values);
    if (result.success) {
      toast({
        title: 'تم الاشتراك بنجاح!',
        description: 'شكرًا لاشتراكك. سنتصل بك قريبًا لمزيد من التفاصيل.',
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'فشل الاشتراك',
        description: result.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الاسم الكامل</FormLabel>
              <FormControl>
                <Input placeholder="مثال: جون دو" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>البريد الإلكتروني</FormLabel>
              <FormControl>
                <Input type="email" placeholder="e.g. john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>رقم الهاتف</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="مثال: 9665xxxxxxx+" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>تاريخ البدء المفضل</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP', { locale: ar })
                      ) : (
                        <span>اختر تاريخًا</span>
                      )}
                      <CalendarIcon className="mr-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                    locale={ar}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'جارٍ الإرسال...' : 'اشترك الآن'}
        </Button>
      </form>
    </Form>
  );
}
