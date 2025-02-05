'use client';

import { SessionModeDTO } from '@/shared/api/model';
import { routeConstants } from '@/shared/constants/routeConstants';
import useChangeComponentPage from '@/shared/lib/hooks/useChangeComponentPage';
import useSelectComponentId from '@/shared/lib/hooks/useSelectComponentId';
import SessionComponentCardList from '@/shared/ui/SessionComponentCardList/SessionComponentCardList';
import React, { memo, useEffect, useState } from 'react';

import { sessionModeControllerFindSessionModes } from '../../../shared/api/session-modes/session-modes';

type Props = React.HTMLAttributes<HTMLDivElement>;

const SessionModeList: React.FC<Props> = ({ ...props }) => {
  const [modes, setModes] = useState<SessionModeDTO[]>([]);
  const { selectComponentId } = useSelectComponentId(
    'sessionModeId',
    routeConstants.dataStructure,
  );
  useChangeComponentPage();

  useEffect(() => {
    const fetchSessionModes = async () => {
      try {
        const { data: sessionModes, status } =
          await sessionModeControllerFindSessionModes();
        if (!sessionModes)
          return <div>Error occured with status code: {status}</div>;
        setModes(sessionModes.sessionModes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSessionModes();
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-20" {...props}>
      <SessionComponentCardList
        selectComponent={selectComponentId}
        sessionComponents={modes}
      />
    </div>
  );
};

export default memo(SessionModeList);
