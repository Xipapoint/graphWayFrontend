import SessionStructureList from '@/widgets/SessionStructuresList/components/SessionStructureList';
import React from 'react';

const Page: React.FC = async (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="h-[100vh] w-[100vw]" {...props}>
      {' '}
      <SessionStructureList />
    </div>
  );
};

export default Page;
