import SessionAlgorithmList from '@/widgets/SessionAlgorithmList/components/SessionAlgorithmList';
import React from 'react';

const Page: React.FC = async (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="h-[100vh] w-[100vw]" {...props}>
      {' '}
      <SessionAlgorithmList />
    </div>
  );
};

export default Page;
