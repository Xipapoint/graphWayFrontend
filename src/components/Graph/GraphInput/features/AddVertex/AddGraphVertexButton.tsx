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

  let vertexId: number = 0

const AddGraphVertexButton: React.FC<AddGraphVertexButtonProps> = ({vertices, handleAddVertex}) => {
  const addVertex = () => {
    
    const randXPos = generateCoord(GRAPHSIZES.Width)
    const randYPos = generateCoord(GRAPHSIZES.Height)
    console.log(vertexId);

    if(vertices.length === 0){
      vertexId = 0
    }

    for (let i = 0; i < vertices.length; i++) {
      if (vertices[i].id === vertexId) {
          vertexId += 1;
      }
  }

    console.log(vertexId);
    const newVertex: IVertex = {
      id: vertexId,
      xPos: randXPos,
      yPos: randYPos,
      pair: [vertexId, Number.MAX_VALUE, 0],
      isShortest: false
    };
    handleAddVertex(newVertex);
    vertexId++
    
  };

  return (
    <UiAddVertexButton onClick ={addVertex}/>
  )
}

export default AddGraphVertexButton