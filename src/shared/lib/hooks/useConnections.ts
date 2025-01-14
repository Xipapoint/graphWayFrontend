import { useMemo } from "react";

export type ConnectionsHook = {};

const useConnections = (): ConnectionsHook => {
  

  return useMemo<ConnectionsHook>(() => ({}), []);
};

export default useConnections;
