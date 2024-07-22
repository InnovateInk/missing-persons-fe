'use client';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Search from '../shared/search';
import SharedTab from './shared-tab';
import { persons } from '@/_data/data';
import { Button } from '../ui/button';
// import Search from '@/components/shared/Search';

// import { blogData, booksData, musicData, podcastData, videoData } from '@/_data/data';

const HomeClient = () => {
  const tabs = [
    {
      value: 'all',
      label: 'All (100)',
      component: <SharedTab data={persons} />,
    },
    {
      value: 'arrested',
      label: 'Arrested (50)',
      component: <SharedTab data={persons} />,
    },
    {
      value: 'abducted ',
      label: 'Abducted (30)',
      component: <SharedTab data={persons} />,
    },
    {
      value: 'dead',
      label: 'Dead (20)',
      component: <SharedTab data={persons} />,
    },
  ];

  return (
    <div>
    <Tabs defaultValue='all' className='mt-10'>
      <div className='container px-4 md:px-10 relative z-10 mx-auto contgr '>
        <TabsList className='flex justify-between w-full text-[#595D62] md:w-[60%] scroll overflow-x-scroll scrollbar-hide scroll-smooth bg-transparent font-grotesk-roman '>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <div className=' -mt-1 border-[0.5px] border-b-[#DCDCDC]' />

      <div className='my-6'>
        <Search />
      </div>

      <div className=' -mt-1 border-[0.5px] border-b-[#DCDCDC]' />
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.component}
        </TabsContent>
      ))}
    </Tabs>
      <div className='w-full flex justify-center py-20'>
        <Button variant='outline' className='px-8 py-8 rounded-[32px] border-[#1E1E1E] bg-transparent text-[#1E1E1E] font-grotesk-roman'>Reveal More </Button>
      </div>
    </div>
  );
};

export default HomeClient;
