import React, { useEffect, useState } from 'react'
import styles from './FindShortestWay.module.scss'
import { dejkstra, getCopyPair, getShortestWay } from './DejkstraAlghorithm';
import { useAppDispatch, useAppSelector } from '../../../../../shared/hooks/redux';
import { graphSlice } from '../../../../../store/reducers/GraphSlice';
import { vertexSlice } from '../../../../../store/reducers/VertexSlice';
import InputWeightVertex from '../../../GraphUi/Input/GraphInputs/InputWeightVertex';
import FindShortestWayButton from '../../../GraphUi/Button/GraphInputButtons/FindShortestWayButton';
import { IVertex } from '../../../../../entities/Graph/IVertex.interface';
import { IEdge } from '../../../../../entities/Graph/IEdge.interface';
const name = "Find shortest way";

interface FindShortestWayFormProps{
  vertices: IVertex[],
  connections: { [key: number]: [number, number][] },
  nameAlghorithm: string,
  debugMode: boolean,
  verticesFSWForm: {
    moveByPixelFSW: (vertices: IVertex[], index: number) => void,
    updatePairFSW: (verices: IVertex[], copyPair: number[][]) => void
  },


}


const FindShortestWayForm:React.FC<FindShortestWayFormProps> = ({vertices, connections, nameAlghorithm, debugMode, verticesFSWForm}) => {
  const [inputFirstIndex, setInputFirstIndex] = useState('')
  const [inputSecondIndex, setInputSecondIndex] = useState('')
 // let {graphVertices, connections} = useAppSelector(state => state.graphReducer)
 //const {vertices} = useAppSelector(state => state.vertexReducer)
 // const {updatePair, addToShortestVertices} = graphSlice.actions
 // const {moveByPixel} = vertexSlice.actions
  const dispatch = useAppDispatch()

  let graphVertices: number[] = [];


  const handleFirstInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFirstIndex(event.target.value);
    console.log(inputFirstIndex);
  };

  const handleSecondInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSecondIndex(event.target.value);
    console.log(inputSecondIndex);
  };


  const handleSumbit = () => {

    for(let i = 0; i < vertices.length; i++){
      verticesFSWForm.moveByPixelFSW(vertices, i)
    }

    switch(nameAlghorithm){
      case 'dejkstra':
        dejkstra(parseInt(inputFirstIndex), parseInt(inputSecondIndex), graphVertices, connections, debugMode) 
        break;
        
      case 'floydWarshall':
        console.log("warshall wasn`t made yet!");
        break;

      default:
        break;
    }
    const copyPair = getCopyPair();
    const shortestWay = getShortestWay();

    verticesFSWForm.updatePairFSW(vertices, copyPair);


    // dispatch(addToShortestVertices(shortestWay));
    
  }

  


  return (
    <div className={styles.dejkstra_block}>
      <div className={styles.vertices_input}>
        <InputWeightVertex
          value={inputFirstIndex}
          onChange={handleFirstInputChange}
        />

        <InputWeightVertex
          value={inputSecondIndex}
          onChange={handleSecondInputChange} 
        />
      </div>
        <FindShortestWayButton onClick={handleSumbit} name={name} />

        <div>
          <button style={{width: '200px', height: '50px', marginTop:'10px'}}>тестовая кнопка</button>
        </div>
    </div>

  )
}

export default FindShortestWayForm