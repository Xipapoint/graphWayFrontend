import React, { createContext, useContext, useMemo } from 'react';

interface VerticesVisualizationContextType {}

const VerticesVisualizationContext =
  createContext<VerticesVisualizationContextType | null>(null);

export const useVerticesVisualizationContext =
  (): VerticesVisualizationContextType => {
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
  const value = useMemo<VerticesVisualizationContextType>(() => ({}), []);

  return (
    <VerticesVisualizationContext.Provider value={value}>
      {children}
    </VerticesVisualizationContext.Provider>
  );
};
