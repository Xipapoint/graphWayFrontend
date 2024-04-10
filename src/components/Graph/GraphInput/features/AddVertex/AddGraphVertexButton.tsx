import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../shared/hooks/redux';
import { vertexSlice } from '../../../../../store/reducers/VertexSlice';
import { graphSlice } from '../../../../../store/reducers/GraphSlice';
import { GRAPHSIZES } from '../../../../../shared/constants/graphConstants';
import { generateCoord } from '../../../../../shared/helpers/RandomCoord';
import { IVertex } from '../../../../../entities/Graph/IVertex.interface';
import UiAddVertexButton from '../../../GraphUi/Button/GraphInputButtons/UiAddVertexButton';



  interface AddGraphVertexButtonProps{
    vertices: IVertex[]
    handleAddVertex: (vertex: IVertex) => void,
  }

  let lastVertexId: number = 0

const AddGraphVertexButton: React.FC<AddGraphVertexButtonProps> = ({vertices, handleAddVertex}) => {
  const addVertex = () => {
    
    const randXPos = generateCoord(GRAPHSIZES.Width)
    const randYPos = generateCoord(GRAPHSIZES.Height)
    console.log(lastVertexId);

    if(vertices.length === 0){
      lastVertexId = 0
    }

    for (let i = 0; i < vertices.length; i++) {
      if (vertices[i].id === lastVertexId) {
          lastVertexId += 1;
      }
  }

    console.log(lastVertexId);
    const newVertex: IVertex = {
      id: lastVertexId,
      xPos: randXPos,
      yPos: randYPos,
      pair: [Number.MAX_VALUE, 0],
      isShortest: false
    };
    handleAddVertex(newVertex);
    lastVertexId++
    
  };

  return (
    <UiAddVertexButton onClick ={addVertex}/>
  )
}

export default AddGraphVertexButton