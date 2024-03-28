import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../shared/hooks/redux';
import { vertexSlice } from '../../../../../store/reducers/VertexSlice';
import { graphSlice } from '../../../../../store/reducers/GraphSlice';
import { GRAPHSIZES } from '../../../../../shared/constants/graphConstants';
import { generateCoord } from '../../../../../shared/helpers/RandomCoord';
import { IVertex } from '../../../../../entities/Graph/models/interfaces/IVertex.interface';
import UiAddVertexButton from '../../../GraphUi/Button/GraphInputButtons/UiAddVertexButton';


const name = "Add vertex";



const AddGraphVertexButton = () => {
  const {vertices, isLoading, error} = useAppSelector(state => state.vertexReducer)
  const {graphVertices} = useAppSelector(state => state.graphReducer)
  let lastVertexId = useAppSelector(state => state.vertexReducer.lastVertexId);
  const dispatch = useAppDispatch()
  const { addVertex } = vertexSlice.actions
  const { addGraphVertex, addPair} = graphSlice.actions


  const handleAddVertex = () => {
    
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
    dispatch(addVertex(newVertex));
    dispatch(addGraphVertex(lastVertexId))
    dispatch(addPair([Number.MAX_VALUE, 0]))
    console.log(graphVertices);
    
    // console.log("wow");
  };

  return (
    <UiAddVertexButton onClick ={handleAddVertex} name={name}/>
  )
}

export default AddGraphVertexButton