'use client';

import { SessionModeDTO } from '@/shared/api/model';
import useChangeComponentPage from '@/shared/lib/hooks/useChangeComponentPage';
import useSelectComponentId from '@/shared/lib/hooks/useSelectComponentId';
import { selectStructureId } from '@/shared/lib/redux/slices/session-components/SessionComponentSlice';
import SessionComponentCardList from '@/shared/ui/SessionComponentCardList/SessionComponentCardList';
import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { sessionAlgorithmControllerFindSessionAlgorithmsByStructureId } from '../../../shared/api/session-algorithms/session-algorithms';

type Props = React.HTMLAttributes<HTMLDivElement>;

const SessionAlgorithmList: React.FC<Props> = ({ ...props }) => {
  const [algorithms, setAlgorithms] = useState<SessionModeDTO[]>([]);
  const { selectComponentId } = useSelectComponentId('sessionAlgorithmId', '');
  const structureId = useSelector(selectStructureId);
  useChangeComponentPage();
  useEffect(() => {
    const fetchSessionAlgorithms = async () => {
      try {
        console.log(structureId);

        const { data: sesionAlgorithms, status } =
          await sessionAlgorithmControllerFindSessionAlgorithmsByStructureId(
            structureId,
          );
        if (!sesionAlgorithms)
          return <div>Error occured with status code: {status}</div>;

        setAlgorithms(sesionAlgorithms);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSessionAlgorithms();
  }, [structureId]);
  return (
    <div className="flex flex-wrap justify-center gap-20" {...props}>
      <SessionComponentCardList
        selectComponent={selectComponentId}
        sessionComponents={algorithms}
      />
    </div>
  );
};

export default memo(SessionAlgorithmList);
