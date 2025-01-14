'use client';

import { useGetSessionTypesQuery } from '@/shared/api/redux/endpoints/sessionEndpoints';
import Card from '@/shared/ui/Card/Card';
import React, { memo, useCallback, useMemo } from 'react';

const SessionTypeList: React.FC = (
  props: React.HTMLAttributes<HTMLDivElement>,
) => {
  const { data, isLoading, isError, error } = useGetSessionTypesQuery();
  useCallback(() => {
    console.log(error);
  }, [error]);
  useCallback(() => {
    console.log('data: ', data);
  }, [data]);
  const sessionTypes = useMemo(() => {
    return data?.map((sessionType) => (
      <Card
        name={sessionType.name}
        imagePath={sessionType.imagePath}
        key={sessionType.id}
      ></Card>
    ));
  }, [data]);
  return (
    <div className="flex flex-wrap justify-center gap-20" {...props}>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data && sessionTypes}
    </div>
  );
};

export default memo(SessionTypeList);
