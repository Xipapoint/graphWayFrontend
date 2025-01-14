import SessionTypeList from '@/widgets/SessionTypeList/ui/SessionTypeList';
import React, { memo } from 'react';

const Page: React.FC = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="h-[100vh] w-[100vw]" {...props}>
      {' '}
      <SessionTypeList />
    </div>
  );
};

export default memo(Page);
