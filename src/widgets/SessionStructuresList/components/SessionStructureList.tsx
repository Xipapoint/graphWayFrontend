'use client';

import { SessionModeDTO } from '@/shared/api/model';
import { sessionStructureControllerFindSessionAlgorithmsByStructureId } from '@/shared/api/session-structures/session-structures';
import { routeConstants } from '@/shared/constants/routeConstants';
import useChangeComponentPage from '@/shared/lib/hooks/useChangeComponentPage';
import useSelectComponentId from '@/shared/lib/hooks/useSelectComponentId';
import { selectDataStructureId } from '@/shared/lib/redux/slices/session-components/SessionComponentSlice';
import SessionComponentCardList from '@/shared/ui/SessionComponentCardList/SessionComponentCardList';
import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

type Props = React.HTMLAttributes<HTMLDivElement>;

const SessionStructureList: React.FC<Props> = ({ ...props }) => {
  const [structures, setStructures] = useState<SessionModeDTO[]>([]);
  const { selectComponentId } = useSelectComponentId(
    'sessionStructureId',
    routeConstants.algorithms,
  );
  const dataStructureId = useSelector(selectDataStructureId);
  useChangeComponentPage();
  useEffect(() => {
    const fetchSessionStructures = async () => {
      try {
        const { data: sesionStructures, status } =
          await sessionStructureControllerFindSessionAlgorithmsByStructureId(
            dataStructureId,
          );
        if (!sesionStructures)
          return <div>Error occured with status code: {status}</div>;
        setStructures(sesionStructures);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSessionStructures();
  }, [dataStructureId]);
  return (
    <div className="flex flex-wrap justify-center gap-20" {...props}>
      <SessionComponentCardList
        selectComponent={selectComponentId}
        sessionComponents={structures}
      />
    </div>
  );
};

export default memo(SessionStructureList);
