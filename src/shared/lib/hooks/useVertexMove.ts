import { useMemo, useState } from "react";
import { updateVertexPosition } from "../functions/vertex/vertexFunctions";

export type VertexMoveHook = {};

const useVertexMove = (xPos: number, yPos: number, id: number): VertexMoveHook => {
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
          if (!isDragging) return;
          let newX = e.clientX - offset.x;
          let newY = e.clientY - offset.y;
    
          newX = Math.max(0, Math.min(newX, size - 30));
          newY = Math.max(0, Math.min(newY, heightSize - 30));
    
          updateVertexPosition({id, xpos: newX, ypos: newY});
        };
    
        const handleMouseUp = () => {
          setIsDragging(false);
        };
    
        if (isDragging) {
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
        }

        const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
            setIsDragging(true);
            setOffset({
              x: e.clientX - xPos,
              y: e.clientY - yPos
            });
            e.preventDefault();
          };
        
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };
      }, [id, isDragging, offset, updateVertexPosition]);

  return useMemo<VertexMoveHook>(() => ({}), []);
};

export default useVertexMove;
