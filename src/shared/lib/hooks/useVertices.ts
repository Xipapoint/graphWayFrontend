import { useMemo } from "react";

export type VerticesHook = {};

const useVertex = (): VerticesHook => {
  

  return useMemo<VerticesHook>(() => ({}), []);
};

export default useVertex;
