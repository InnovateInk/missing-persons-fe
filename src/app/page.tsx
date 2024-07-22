import Image from 'next/image';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Container from '@/components/shared/container';
import HomeClient from '@/components/home/home-client';

export default function Home() {
  return (
    <div className=' w-full'>
      <Container>
        <div className='w-full flex mt-6 justify-end  '>
          <div className=' space-y-2.5'>
            <label className='text-[#1E1E1E] font-grotesk-roman px-2 text-base'>
              Filter by county
            </label>
            <Select defaultValue='all'>
              <SelectTrigger className='w-[180px] h-[50px] py-4 rounded-full px-6 text-[#595D62]'>
                <SelectValue placeholder='Select place' />
              </SelectTrigger>
              <SelectContent className='outline-none focus-visible:ring-0 '>
                <SelectGroup>
                  <SelectLabel>Filter by county</SelectLabel>
                  <SelectItem value='all'>Nationally</SelectItem>
                  <SelectItem value='nairobi'>Nairobi</SelectItem>
                  <SelectItem value='mombasa'>Mombasa</SelectItem>
                  <SelectItem value='nakuru'>Nakuru</SelectItem>
                  <SelectItem value='kisumu'>Kisumu</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=' max-w-[40rem] text-sm font-grotesk text-[#595D62]'>
          <p>
            The following people we either , arrested, abducted or killed during
            the Gen-Z drain the swamp. Where these youths nothing other than
            fight for a better Kenya, a Kenya clean of corruption, Nepotism, a
            country where systems actually work.{' '}
          </p>
        </div>
      </Container>

      <HomeClient />
    </div>
  );
}
