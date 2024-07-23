'use client';
import { Plus, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Dialog, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import Container from './container';
import SearchForm from './search-form';


const SearchArea = () => {
  return (
    <Container>
      <div className='w-full py-6 flex justify-between flex-col-reverse md:flex-row gap-y-4'>
        <div className='flex w-full md:w-3/4  items-center h-full gap-4 '>
          <div className='flex gap-2 border border-[#DCDCDC] w-full py-1.5 md:py-2.5 rounded-[32px] items-center h-full px-7 '>
            <Search strokeWidth={1.5} />
            <Input
              placeholder='Who are you looking for?'
              className='outline-none border-none font-grotesk focus-visible:ring-0 px-2 placeholder:text-[#595D62] '
            />
          </div>
          <Button className=' rounded-[32px] h-full py-4 md:py-5 bg-[#1E1E1E] px-8 font-grotesk'>
            Find the hero
          </Button>
        </div>
        <div className='flex w-full md:w-auto justify-end'>
          <Dialog>
            <DialogTrigger asChild>
              <Button className=' rounded-none h-full py-4 md:py-5 bg-[#1E1E1E] px-10 gap-2 font-grotesk'>
                {' '}
                <Plus />
                List a hero
              </Button>

            </DialogTrigger>
            <SearchForm/>
          </Dialog>
        </div>
      </div>
    </Container>
  );
};

export default SearchArea;
