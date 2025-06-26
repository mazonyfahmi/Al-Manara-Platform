'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  startDate: z.date(),
});

export async function handleSubscription(values: z.infer<typeof formSchema>) {
  // Here you would typically save the data to a database
  // and send a confirmation email.
  // For this demo, we'll just simulate a success response.
  
  console.log('New subscription received:', values);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (values.email.includes('fail')) {
    return { success: false, message: 'This email address is blocked.' };
  }

  return { success: true };
}
