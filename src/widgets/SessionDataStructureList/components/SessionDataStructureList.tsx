'use client';

import { SessionModeDTO } from '@/shared/api/model';
import { sessionDataStructureControllerFindSessionDataStructures } from '@/shared/api/session-data-structures/session-data-structures';
import { routeConstants } from '@/shared/constants/routeConstants';
import useChangeComponentPage from '@/shared/lib/hooks/useChangeComponentPage';
import useSelectComponentId from '@/shared/lib/hooks/useSelectComponentId';
import SessionComponentCardList from '@/shared/ui/SessionComponentCardList/SessionComponentCardList';
import React, { memo, useEffect, useState } from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

const SessionDataStructureList: React.FC<Props> = ({ ...props }) => {
  const [dataStructures, setDataStructures] = useState<SessionModeDTO[]>([]);
  const { selectComponentId } = useSelectComponentId(
    'sessionDataStructureId',
    routeConstants.structure,
  );
  useChangeComponentPage();

  useEffect(() => {
    const fetchSessionDataStructures = async () => {
      try {
        const { data: sesionDataStructures, status } =
          await sessionDataStructureControllerFindSessionDataStructures();
        if (!sesionDataStructures)
          return <div>Error occured with status code: {status}</div>;
        setDataStructures(sesionDataStructures.sessionDataStructures);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSessionDataStructures();
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-20" {...props}>
      <SessionComponentCardList
        selectComponent={selectComponentId}
        sessionComponents={dataStructures}
      />
    </div>
  );
};

export default memo(SessionDataStructureList);
