import React, { useState } from 'react'
import styles from './FindShortestWay.module.scss'
import { dejkstra, getCopyPair, getShortestWay } from './DejkstraAlghorithm';
import InputWeightVertex from '../../../GraphUi/Input/GraphInputs/InputWeightVertex';
import FindShortestWayButton from '../../../GraphUi/Button/GraphInputButtons/FindShortestWayButton';
import { IVertex } from '../../../../../entities/Graph/IVertex.interface';
import { IEdge } from '../../../../../entities/Graph/IEdge.interface';
const name = "Find shortest way";

interface FindShortestWayFormProps{
  nameAlghorithm: string,
  debugMode: boolean,
  FSWForm: {
    connections: { [key: number]: [number, number][] }
    vertices: IVertex[],
    edges: IEdge[],
    moveByPixelFSW: (vertices: IVertex[], index: number) => void,
    updatePairFSW: (verices: IVertex[], copyPair: number[][]) => void
    updateIsShortest: (vertices: IVertex[], shortestWay: number[][], index: number) => void
  },


}


const FindShortestWayForm:React.FC<FindShortestWayFormProps> = ({nameAlghorithm, debugMode, FSWForm}) => {
  const [inputFirstIndex, setInputFirstIndex] = useState('')
  const [inputSecondIndex, setInputSecondIndex] = useState('')

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

    for(let i = 0; i < FSWForm.vertices.length; i++){
      FSWForm.moveByPixelFSW(FSWForm.vertices, i)
    }

    switch(nameAlghorithm){
      case 'dejkstra':
        dejkstra(parseInt(inputFirstIndex), parseInt(inputSecondIndex), graphVertices, FSWForm.connections, debugMode) 
        break;
        
      case 'floydWarshall':
        console.log("warshall wasn`t made yet!");
        break;

      default:
        break;
    }
    const copyPair = getCopyPair();
    const shortestWay = getShortestWay();

    FSWForm.updatePairFSW(FSWForm.vertices, copyPair);
    FSWForm.updateIsShortest(FSWForm.vertices, shortestWay, 1)    
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