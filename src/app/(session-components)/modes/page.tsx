import SessionModeList from '@/widgets/SessionModeList/components/SessionModeList';
import React from 'react';

const Page: React.FC = async (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="h-[100vh] w-[100vw]" {...props}>
      {' '}
      <SessionModeList />
    </div>
  );
};

export default Page;
