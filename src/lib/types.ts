export type Course = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  instructor: string;
  duration: string;
  imageUrl: string;
  aiHint: string;
};

export type Student = {
  id: string;
  name: string;
  email: string;
  enrolledDate: string;
  courses: number;
};

export type Subscription = {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  requestedDate: string;
  status: 'قيد الانتظار' | 'مقبول' | 'مرفوض';
};
