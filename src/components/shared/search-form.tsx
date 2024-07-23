import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import kenyanFlag from '../../../public/kenyan-flag.svg';
import { Button } from '../ui/button';
import { DialogContent } from '../ui/dialog';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '../ui/textarea';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useState } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  datetime: z.date({
    required_error: 'Date & time is required!.',
  }),
});

const SearchForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState<string>('05:00');
  const [date, setDate] = useState<Date | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <DialogContent className=' max-w-3xl max-h-full grid grid-cols-5 p-2 '>
      <div className='overflow-hidden col-span-2 border'>
        <Image src={kenyanFlag} alt={''} />
      </div>
      <div className=' col-span-3'>
        <h1>Report a missing person</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <div className='grid grid-cols-3 gap-4'>
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem className='col-span-2'>
                    <FormLabel>
                      Full name <span className='text-[#B20000]'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter the full name '
                        {...field}
                        className=' focus-visible:ring-0 rounded-none h-[6.5dvh]'
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem className='col-span-1'>
                    <FormLabel>
                      Age<span className='text-[#B20000]'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter age '
                        {...field}
                        className=' rounded-none h-[6.5dvh]'
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem className='col-span-1'>
                  <FormLabel>
                    Status<span className='text-[#B20000]'>*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className=' rounded-none h-[6.5dvh]'>
                        <SelectValue placeholder='Select status' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='m@example.com'>
                        m@example.com
                      </SelectItem>
                      <SelectItem value='m@google.com'>m@google.com</SelectItem>
                      <SelectItem value='m@support.com'>
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Brief explanation of what transpired
                    <span className='text-[#B20000]'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Tell us a little bit about yourself'
                      className='resize-none'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex w-full gap-4'>
              <FormField
                control={form.control}
                name='datetime'
                render={({ field }) => (
                  <FormItem className='flex flex-col w-full'>
                    <FormLabel>
                      Select expected date & time of travel
                      <span className='text-[#B20000]'>*</span>
                    </FormLabel>
                    <Popover open={isOpen} onOpenChange={setIsOpen}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              `${format(field.value, 'PPP')}, ${time}`
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='single'
                          captionLayout='dropdown'
                          selected={date || field.value}
                          onSelect={(selectedDate) => {
                            const [hours, minutes] = time?.split(':')!;
                            selectedDate?.setHours(
                              parseInt(hours),
                              parseInt(minutes)
                            );
                            setDate(selectedDate!);
                            field.onChange(selectedDate);
                          }}
                          onDayClick={() => setIsOpen(false)}
                          fromYear={2000}
                          toYear={new Date().getFullYear()}
                          disabled={(date) =>
                            Number(date) < Date.now() - 1000 * 60 * 60 * 24 ||
                            Number(date) > Date.now() + 1000 * 60 * 60 * 24 * 30
                          }
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='datetime'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      <Select
                        defaultValue={time!}
                        onValueChange={(e) => {
                          setTime(e);
                          if (date) {
                            const [hours, minutes] = e.split(':');
                            const newDate = new Date(date.getTime());
                            newDate.setHours(
                              parseInt(hours),
                              parseInt(minutes)
                            );
                            setDate(newDate);
                            field.onChange(newDate);
                          }
                        }}
                        // open={open}
                      >
                        <SelectTrigger className='font-normal focus:ring-0 w-[120px] mt-4 mr-2'>
                          <SelectValue />
                        </SelectTrigger>
                        <div>
                          <SelectContent className='border-none shadow-none mt-2'>
                            <ScrollArea className='h-[15rem]'>
                              {Array.from({ length: 96 }).map((_, i) => {
                                const hour = Math.floor(i / 4)
                                  .toString()
                                  .padStart(2, '0');
                                const minute = ((i % 4) * 15)
                                  .toString()
                                  .padStart(2, '0');
                                return (
                                  <SelectItem
                                    key={i}
                                    value={`${hour}:${minute}`}
                                  >
                                    {hour}:{minute}
                                  </SelectItem>
                                );
                              })}
                            </ScrollArea>
                          </SelectContent>
                        </div>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </div>
    </DialogContent>
  );
};

export default SearchForm;
