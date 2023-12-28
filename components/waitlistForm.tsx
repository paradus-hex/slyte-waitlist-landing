'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email.',
  }),
});

export function WaitlistForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(
        'https://slyte-landing.vercel.app/api/waitlist',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Form submitted successfully');
      setIsSubmittedSuccessfully(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  if (isSubmittedSuccessfully) {
    return (
      <div className="success-message bg-gray-800/20">
        <p>Form submitted successfully!</p>
        <a href="https://www.instadm.ai/">Go to Home</a>
      </div>
    );
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 responsive-form"
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-center text-gray-200 mb-4">
          Transform Your <span className="insta_gradient">Instagram</span>{' '}
          Outreach
        </h2>
        <h6 className="text-2xl font-semibold text-center text-gray-500 mb-4">
          Join Our Waitlist!
        </h6>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter you name"
                  {...field}
                  className="bg-transparent"
                />
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
              <FormLabel className="text-gray-300">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  {...field}
                  className="bg-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
