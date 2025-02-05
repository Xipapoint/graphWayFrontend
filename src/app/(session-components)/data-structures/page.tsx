import SessionDataStructureList from '@/widgets/SessionDataStructureList/components/SessionDataStructureList';
import React from 'react';

const Page: React.FC = async (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="h-[100vh] w-[100vw]" {...props}>
      {' '}
      <SessionDataStructureList />
    </div>
  );
};

export default Page;
