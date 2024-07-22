'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const HeroImage = ({
  src,
  alt,
  className,
}: {
  alt: string | undefined;
  src: string | undefined;
  className?: string;
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <div className='overflow-hidden relative w-full '>
      <Image
        src={src ?? ''}
        alt={alt ?? 'hero image'}
        width={300}
        onLoad={() => setIsLoading(false)}
        height={350}
        className={cn(
          ' w-full object-cover transition-all hover:scale-105 blur-none aspect-video  group-hover:opacity-50',
          { 'blur-md': isLoading },
          className
        )}
      />
    </div>
  );
};

export default HeroImage;
