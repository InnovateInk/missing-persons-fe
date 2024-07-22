'use client';
import React, { useState } from 'react';
import Container from '../shared/container';
import { personProps } from '@/_data/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';

const SharedTab = ({ data }: { data: personProps[] }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Container>
      <div className='w-full grid grid-cols-1 md:grid-cols-3  xl:grid-cols-4 gap-4 mt-16'>
        {data.map((item) => (
          <Card key={item.id} className='border-none shadow-none'>
            <Link href={`/people/${item.name}`} className='w-full h-full'>
              <CardHeader className='p-0'>
                <div className='overflow-hidden relative '>
                  <Image
                    src={item?.image ?? ''}
                    alt={item.name}
                    width={300}
                    onLoad={() => setIsLoading(false)}
                    height={330}
                    className={cn(
                      'h-auto w-full object-cover transition-all hover:scale-105 blur-none aspect-video  group-hover:opacity-50',
                      { 'blur-md': isLoading }
                    )}
                  />
                  <div className='absolute top-3 right-4 opacity-100 z-10'>
                    <Badge className='bg-[#B20000] text-background hover:bg-[#B20000] capitalize font-grotesk-roman px-4'>{item.status}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className='px-2 py-2'>
                    <div className='flex justify-between  h-full items-center'>
                      <CardTitle className=' font-tobias-medium text-lg font-medium'>
                        <span>{item.name}</span>,{" "}
                        <span>{item.age}</span></CardTitle> 
                      <Badge className='bg-[#FFE4E4] text-[#B20000] hover:bg-[#FFE4E4] h-full text-[10px] font-grotesk py-0.5 px-4'>24 days ago</Badge>
                    </div>
              </CardContent>
              <CardFooter className='flex flex-col items-start px-2 pt-1 space-y-1.5'>
                <div className=' font-grotesk text-sm'>
                  <span>{item.status === 'abducted' ? 'Abducted' : item.status === 'deceased' ? 'Deceased' : 'Arrested'}:</span>{" "}
                  <span>{item.location}</span>
                </div>
                <div className=' font-grotesk text-sm'>
                  <span>Date:</span> {""}
                  <span>{item.date}</span>
                </div>

              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default SharedTab;
