import React, { memo } from 'react';

import useGraphSize from '../lib/hooks/useGraphSize';

interface GraphUiVertexProps extends React.HTMLAttributes<HTMLDivElement> {
  vertexId: number;
  xPos: number;
  yPos: number;
  pair: number[];
  draggable: boolean;
  updateVertexPosition: (id: number, xPos: number, yPos: number) => void;
  handleDeleteVertex: (id: number) => void;
  handleClick: () => void;
  editMode: boolean; // TODO: context
  isShortestVertex: boolean;
}

const UiVertex: React.FC<GraphUiVertexProps> = ({
  isShortestVertex,
  vertexId,
  xPos,
  yPos,
  draggable,
  updateVertexPosition,
  handleClick,
  pair,
  handleDeleteVertex,
  editMode,
  style,
  ...props
}) => {
  let visualWeight = pair[1];
  const { size, heightSize } = useGraphSize(500);
  if (visualWeight === Number.MAX_VALUE) visualWeight = Infinity;

  // const handleClick = () => {
  //   handleDeleteVertex(id);
  // };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) =>
    console.log('mouse down');

  return (
    <div
      onClick={editMode ? handleClick : undefined}
      data-vertex-id={vertexId}
      // className={clsx(
      //   styles.vertice,
      //   { [styles.shortest_vertex]: isShortestVertex },
      //   { [styles.editVertexMode]: editMode },
      // )}
      style={{
        ...style,
        left: xPos,
        top: yPos,
        cursor: draggable ? 'grab' : 'auto',
      }}
      onMouseDown={draggable && !editMode ? handleMouseDown : undefined}
      id={vertexId?.toString()}
      {...props}
    >
      {vertexId}
      {/* <div className={styles.pair}>{`(${visualWeight}, ${pair[2]})`}</div> */}
    </div>
  );
};

export default memo(UiVertex);
