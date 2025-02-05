import { sessionComponentRoutes } from '@/shared/constants/routeConstants';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect } from 'react';

import { useSessionComponentDispatch } from '../redux/hooks/sessionComponentHooks';
import { removeComponentIds } from '../redux/slices/session-components/SessionComponentSlice';

const pageSteps: Record<
  (typeof sessionComponentRoutes)[keyof typeof sessionComponentRoutes],
  number
> = {
  '/modes': 0,
  '/data-structures': 1,
  '/structures': 2,
  '/algorithms': 3,
};

const useChangeComponentPage = () => {
  const path = usePathname();
  const dispatch = useSessionComponentDispatch();

  const changePage = useCallback(() => {
    const index = pageSteps[path as keyof typeof pageSteps];

    if (index !== undefined) dispatch(removeComponentIds(index));
  }, [dispatch, path]);

  useEffect(() => {
    changePage();
  }, [changePage]);
};

export default useChangeComponentPage;
