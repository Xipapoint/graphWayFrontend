import React, { createContext, useContext, useMemo } from "react";

interface GraphVisualizationContextType {

}

const GraphVisualizationContext = createContext<GraphVisualizationContextType | null>(null);

export const useGraphVisualizationContext = (): GraphVisualizationContextType => {
  const context = useContext(GraphVisualizationContext);

  if (context === null) {
    throw new Error(
      "GraphVisualizationContext cannot be null, please add a context provider."
    );
  }

  return context;
};

export const GraphVisualizationContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [vertices, setVertices] = useState<IVertex[]>([]);
  const [edges, setEdges] = useState<IEdge[]>([]);
    const value = useMemo<GraphVisualizationContextType>(() => ({}), []);

  return (
    <GraphVisualizationContext.Provider value={value}>
      {children}
    </GraphVisualizationContext.Provider>
  );
};
