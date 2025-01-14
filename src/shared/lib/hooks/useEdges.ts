import { useMemo } from "react";

export type EdgesHook = {};

const useEdges = (): EdgesHook => {
  

  return useMemo<EdgesHook>(() => ({}), []);
};

export default useEdges;
