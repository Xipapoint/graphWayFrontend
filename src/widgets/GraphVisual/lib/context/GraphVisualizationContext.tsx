import { Edge } from '@/entities/Graph/Edge';
import { Vertex } from '@/entities/Graph/Vertex';
import React, { createContext, useContext, useMemo } from 'react';

interface GraphVisualizationDataType {}

interface GraphVisualizationContextType {}

const GraphVisualizationContext =
  createContext<GraphVisualizationContextType | null>(null);

export const useGraphVisualizationContext =
  (): GraphVisualizationContextType => {
    const context = useContext(GraphVisualizationContext);

    if (context === null) {
      throw new Error(
        'GraphVisualizationContext cannot be null, please add a context provider.',
      );
    }

    return context;
  };

export const GraphVisualizationContextProvider: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [vertices, setVertices] = useState<Vertex[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const value = useMemo<GraphVisualizationDataType>(() => ({}), []);

  return (
    <GraphVisualizationContext.Provider value={value}>
      {children}
    </GraphVisualizationContext.Provider>
  );
};
