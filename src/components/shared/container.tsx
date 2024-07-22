import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className='container px-4 md:px-10 relative z-10 mx-auto'>
      {children}
    </div>
  );
};

export default Container;