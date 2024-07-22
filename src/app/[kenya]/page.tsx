import { persons } from '@/_data/data';
import HeroImage from '@/components/home/hero-image';
import Container from '@/components/shared/container';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from '@/components/ui/timeline';

import { Separator } from '@/components/ui/separator';
import { Phone } from 'lucide-react';
import Link from 'next/link';

const images = [
  {
    image: '/image-1.png',
    name: 'Rex Maasai',
  },
  {
    image: '/image-2.png',
    name: 'Rex Maasai',
  },
  {
    image: '/image-2.png',
    name: 'Rex Maasai',
  },
];

const singlePerson = ({ params: { kenya } }: { params: { kenya: string } }) => {
  const username = decodeURIComponent(kenya).replaceAll('+', ' ');
  const person = persons.find((person) => person.name === username);
  return (
    <div className='mt-8 px-32 min-h-screen'>
      <Container>
        <div className=' text-sm'>
          <Link href={'/'} className=' text-[#595D62]'>
            Home
          </Link>{' '}
          /{' '}
          <Link
            href={`/${person?.name.replaceAll(' ', '+')}`}
            className=' font-grotesk-roman'
          >
            {person?.name ?? ''}
          </Link>
        </div>
        <div className='grid grid-cols-7 gap-8 mt-10'>
          <div className='w-full col-span-4'>
            <HeroImage
              src={person?.image}
              alt={person?.name}
              className='h-[52dvh]'
            />
            <div className='mt-6 space-y-3'>
              <h1 className='text-[#1E1E1E] font-grotesk-roman'>
                Brief of what happened{' '}
              </h1>
              <p className='text-[#595D62] text-sm font-grotesk'>
                The following people we either , arrested, abducted or killed
                during the Gen-Z drain the swamp. Where these youths nothing
                other than fight for a better Kenya, a Kenya clean of
                corruption, Nepotism, a country where systems actually work.{' '}
              </p>
            </div>
            <div>
              <Separator className='my-5 bg-[#DCDCDC]' />
            </div>

            <div className=' space-y-4'>
              <h1 className='text-[#1E1E1E] font-grotesk-roman'>
                Images / videos of what happened{' '}
              </h1>
              <div className='grid grid-cols-3 '>
                {images.map((image, idx) => (
                  <HeroImage
                    key={idx}
                    src={image.image}
                    alt={image.name}
                    className='h-[14.23dvh] w-[12.7dvw]'
                  />
                ))}
              </div>
              <div className=' space-y-1.5 pt-2'>
                <div className=' text-xs text-[#595D62]'>
                  <span className=' font-grotesk'>Posted by </span>
                  <span className=' font-grotesk-roman underline underline-offset-2'>
                    Lewis Kori
                  </span>
                </div>
                <div className='text-xs text-[#595D62]'>
                  <span className=' font-grotesk'>Approved by </span>
                  <span className='font-grotesk-roman underline underline-offset-2'>
                    Muhu Njenga
                  </span>{' '}
                  <span>12:25 pm, 25th June 2024</span>
                </div>
              </div>
              <Separator className=' bg-[#DCDCDC]' />

              <div className='mt-6 space-y-3'>
                <h1 className='text-[#1E1E1E] font-grotesk-roman'>Timeline</h1>
                <Timeline>
                  <TimelineItem status='done'>
                    <TimelineHeading className='font-grotesk text-[#595D62] text-xs'><span className='font-grotesk-roman font-medium'>Abducted,</span> 12:21 am, 25th June 2024 </TimelineHeading>
                    <TimelineDot status='abducted' />
                    <TimelineLine done />
                    <TimelineContent className='font-grotesk text-[#595D62] text-xs'>
                    <span className='font-grotesk-roman font-medium'>Location:</span> Kasarani Police Station
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                  <TimelineHeading className='font-grotesk text-[#595D62] text-sm'><span className='font-grotesk-roman font-medium'>Released,</span> 12:21 am, 25th June 2024 </TimelineHeading>
                    <TimelineDot  status={'released'}/>
                    <TimelineContent className='font-grotesk text-[#595D62] text-xs'>
                    <span className='font-grotesk-roman font-medium'>Location:</span> Kasarani Police Station
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </div>
          <div className='col-span-3'>
            <Card className='border-[#DCDCDC] rounded-2xl shadow-none'>
              <CardHeader className='flex flex-row  gap-6'>
                <CardTitle className=' font-tobias-medium text-[28px] font-medium'>
                  <span>{person?.name}</span>, <span>{person?.age}</span>
                </CardTitle>
                <Badge className='bg-[#B20000] text-background hover:bg-[#B20000] capitalize font-grotesk-roman px-4 h-full py-1'>
                  {person?.status}
                </Badge>
              </CardHeader>
              <CardContent className='space-y-2'>
                <h1 className=' font-grotesk-roman text-[#1E1E1E]'>Contacts</h1>
                <CardDescription className=' font-grotesk text-[#595D62] text-sm'>
                  If you have any leads on where the person is , Kindly contact
                  the following ;
                </CardDescription>
                <div>
                  <Separator className='my-5 bg-[#DCDCDC]' />
                </div>
                <CardDescription className=' font-grotesk-roman text-[#1E1E1E] text-sm  pb-2'>
                  Law Society of Kenya
                </CardDescription>
                <div className='flex gap-4 items-center h-full mt-4'>
                  <div className='flex items-center justify-center size-[32px] bg-[#EEEEEE] rounded-[8px]'>
                    <Phone size={20} color='#1E1E1E' strokeWidth={1.2} />
                  </div>
                  <CardDescription className='  text-[#1E1E1E] text-sm font-medium'>
                    +254 701 234 567
                  </CardDescription>
                </div>
                <div>
                  <Separator className='my-3 bg-[#DCDCDC]' />
                </div>
                <CardDescription className=' font-grotesk-roman text-[#1E1E1E] text-sm  pt-1 pb-2'>
                  Law Society of Kenya
                </CardDescription>
                <div className='flex gap-4 items-center h-full mt-4'>
                  <div className='flex items-center justify-center size-[32px] bg-[#EEEEEE] rounded-[8px]'>
                    <Phone size={20} color='#1E1E1E' strokeWidth={1.2} />
                  </div>
                  <CardDescription className='  text-[#1E1E1E] text-sm font-medium'>
                    +254 701 234 567
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default singlePerson;
