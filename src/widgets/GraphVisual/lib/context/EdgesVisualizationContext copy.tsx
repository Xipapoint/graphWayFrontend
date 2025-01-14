import { Edge } from '@/entities/Graph/Edge';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

interface EdgesVisualizationDataType {
  edges: Edge[];
}

interface EdgesVisualizationContextType extends EdgesVisualizationDataType {
  setEdges: Dispatch<SetStateAction<Edge[]>>;
}

const VerticesVisualizationContext =
  createContext<EdgesVisualizationContextType | null>(null);

export const useVerticesVisualizationContext =
  (): EdgesVisualizationDataType => {
    const context = useContext(VerticesVisualizationContext);

    if (context === null) {
      throw new Error(
        'VerticesVisualizationContext cannot be null, please add a context provider.',
      );
    }

    return context;
  };

export const VerticesVisualizationContextProvider: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [edges, setEdges] = useState<Edge[]>([]);
  const handleSetEdges = () => {
    setApp;
  };
  const value = useMemo<EdgesVisualizationContextType>(
    () => ({
      edges,
      setEdges,
    }),
    [edges],
  );

  return (
    <VerticesVisualizationContext.Provider value={value}>
      {children}
    </VerticesVisualizationContext.Provider>
  );
};
