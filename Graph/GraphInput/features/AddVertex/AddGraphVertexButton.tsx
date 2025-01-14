import React, { useEffect, useState } from 'react'
import { GRAPHSIZES } from '../../../../../shared/constants/graphConstants';
import { generateCoord } from '../../../../../shared/helpers/RandomCoord';
import { IVertex } from '../../../../../entities/Graph/IVertex.interface';
import UiAddVertexButton from '../../../GraphUi/Button/GraphInputButtons/UiAddVertexButton';
import useGraphSize from '../../../../../shared/hooks/useGraphSize';



  interface AddGraphVertexButtonProps{
    vertices: IVertex[]
    handleAddVertex: (vertex: IVertex) => void,
  }

  let vertexId: number = 0

const AddGraphVertexButton: React.FC<AddGraphVertexButtonProps> = ({vertices, handleAddVertex}) => {
  const { size, heightSize } = useGraphSize(500)
  const addVertex = () => {
    
    const randXPos = generateCoord(size)
    const randYPos = generateCoord(heightSize)
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