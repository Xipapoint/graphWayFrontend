import React, { RefObject, useEffect, useState } from 'react'
import styles from './vertex.module.scss'
import useRef from 'react';
import { GRAPHSIZES } from '../../../../shared/constants/graphConstants';


interface GraphUiVertexProps {
  id: number,
  xPos: number;
  yPos: number;
  pair: number[],
  draggable: boolean
  updateVertexPosition: (id: number, xPos: number, yPos: number) => void;
  handleDeleteVertex: (id: number) => void,
  editMode: boolean
  isShortestVertex: boolean
}

const UiVertex: React.FC<GraphUiVertexProps> = ({isShortestVertex, id, xPos, yPos, draggable, updateVertexPosition, pair, handleDeleteVertex, editMode}) => {

  let visualWeight = pair[1];

  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  if(visualWeight === Number.MAX_VALUE) visualWeight = Infinity

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      let newX = e.clientX - offset.x;
      let newY = e.clientY - offset.y;

      newX = Math.max(0, Math.min(newX, GRAPHSIZES.Width - 36));
      newY = Math.max(0, Math.min(newY, GRAPHSIZES.Height - 36));

      updateVertexPosition(id, newX, newY);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [id, isDragging, offset, updateVertexPosition, pair, isShortestVertex]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - xPos,
      y: e.clientY - yPos
    });
    e.preventDefault();
  };


  const handleClick = () => {
    handleDeleteVertex(id); 
  };


  return (
    <div
     onClick={ editMode ? handleClick : undefined}
     data-vertex-id = {id} 
     className={`${styles.vertice} ${isShortestVertex ? styles.shortest_vertex : ''} ${editMode ? styles.editVertexMode : ''}` }
     style={{left: xPos, top: yPos, cursor: draggable ? 'grab' : 'auto' }}
     onMouseDown={draggable && !editMode ? handleMouseDown : undefined}
     id={id.toString()}
     >
        {id}
        <div className={styles.pair}>
            {`(${visualWeight}, ${pair[2]})`}
        </div>
    </div>
  )
}

export default UiVertex