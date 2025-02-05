import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

import { useSessionComponentDispatch } from '../redux/hooks/sessionComponentHooks';
import {
  ComponentIdType,
  componentIdAdded,
} from '../redux/slices/session-components/SessionComponentSlice';

export type SelectComponentIdHook = {
  selectComponentId: (componentId: string) => void;
};

const useSelectComponentId = (
  componentType: ComponentIdType,
  href: string,
): SelectComponentIdHook => {
  const dispatch = useSessionComponentDispatch();
  const router = useRouter();
  const selectComponentId = useCallback(
    (componentId: string) => {
      dispatch(componentIdAdded({ componentType, id: componentId }));
      router.push(href);
    },
    [dispatch, componentType, href, router],
  );

  return useMemo<SelectComponentIdHook>(
    () => ({
      selectComponentId,
    }),
    [selectComponentId],
  );
};

export default useSelectComponentId;
