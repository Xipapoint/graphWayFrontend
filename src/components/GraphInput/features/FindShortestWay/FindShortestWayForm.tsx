import React, { useEffect, useState } from 'react'
import styles from './FindShortestWay.module.scss'
import InputWeightVertex from '../../../ui/Input/GraphInputs/InputWeightVertex';
import TemplateButton from '../../../ui/Button/GraphInputButtons/UiAddVertexButton';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/redux';
import FindShortestWayButton from '../../../ui/Button/GraphInputButtons/FindShortestWayButton';
import { dejkstra, getCopyPair, getShortestWay } from './DejkstraAlghorithm';
import { graphSlice } from '../../../../store/reducers/GraphSlice';
import { vertexSlice } from '../../../../store/reducers/VertexSlice';

const name = "Find shortest way";

interface FindShortestWayFormProps{
  nameAlghorithm: string
}


const FindShortestWayForm:React.FC<FindShortestWayFormProps> = ({nameAlghorithm}) => {
  const [inputFirstIndex, setInputFirstIndex] = useState('')
  const [inputSecondIndex, setInputSecondIndex] = useState('')
  let {graphVertices, connections} = useAppSelector(state => state.graphReducer)
  const {vertices} = useAppSelector(state => state.vertexReducer)
  const {updatePair, addToShortestVertices} = graphSlice.actions
  const {moveByPixel} = vertexSlice.actions
  const dispatch = useAppDispatch()


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
      dispatch(moveByPixel(i))
    }

    switch(nameAlghorithm){
      case 'dejkstra':
        dejkstra(parseInt(inputFirstIndex), parseInt(inputSecondIndex), graphVertices, connections) 
        break;
        
      case 'floydWarshall':
        console.log("warshall wasn`t made yet!");
        break;

      default:
        break;
    }
    const copyPair = getCopyPair();
    const shortestWay = getShortestWay();

    dispatch(updatePair(copyPair));
    dispatch(addToShortestVertices(shortestWay));
    
  }

  

  // useEffect(() => {

  // }, [dispatch, updatePair, addToShortestVertices]);
 
  


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