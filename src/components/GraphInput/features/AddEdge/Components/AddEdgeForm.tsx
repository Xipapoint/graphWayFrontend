import React, { useMemo, useRef, useState } from 'react'
import styles from './AddEdgeForm.module.scss'
import InputWeightVertex from '../../../../ui/Input/GraphInputs/InputWeightVertex'
import SmallTemplateButton from '../../../../ui/Button/GraphInputButtons/SmallTemplateButton'
import { useAppDispatch, useAppSelector } from '../../../../../shared/hooks/redux'
import { edgeSlice } from '../../../../../store/reducers/EdgeSlice'
import { IEdge } from '../../../../../entities/Graph/models/interfaces/IEdge.interface'
import { calculateWeight } from '../../../../../shared/helpers/CalculateWeight'
import { getVertexCenterCoords } from '../../../../../shared/helpers/GetVertexCenterCoords'
import { GRAPHSIZES } from '../../../../../shared/constants/graphConstants'
import { calculateAngle } from '../../../../../shared/helpers/CalculateAngle'
import { graphSlice } from '../../../../../store/reducers/GraphSlice'

const name = "Add edge"


const AddEdgeForm = () => {

  const [inputFirstIndex, setInputFirstIndex] = useState('')
  const [inputSecondIndex, setInputSecondIndex] = useState('')
  const {vertices} = useAppSelector(state => state.vertexReducer)
  const dispatch = useAppDispatch()
  const {addEdge} = edgeSlice.actions
  const {addConnection} = graphSlice.actions


  const handleFirstInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFirstIndex(event.target.value);
    console.log(inputFirstIndex);
    
  };

  const handleSecondInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSecondIndex(event.target.value);
    console.log(inputSecondIndex);
  };



  const handleSubmit = () => {

    if (!inputFirstIndex || !inputSecondIndex) {
      alert("Enter all vertices!");
      return;
    }

    if (inputFirstIndex === inputSecondIndex) {
      alert("You can't create an edge with the same vertex");
      return;
    }

    console.log('first index:', inputFirstIndex);
    console.log('second index:', inputSecondIndex);

    const vertex1 = document.querySelector<HTMLElement>('[data-vertex-id="' + inputFirstIndex + '"]');
    const vertex2 = document.querySelector<HTMLElement>('[data-vertex-id="' + inputSecondIndex + '"]');

    const centerVertex1 = getVertexCenterCoords(vertex1);
    const centerVertex2 = getVertexCenterCoords(vertex2);

    const Weight = calculateWeight(centerVertex1, centerVertex2);
    const Angle = calculateAngle(centerVertex1, centerVertex2);
    const newEdge: IEdge = {
      
      id: 0,
      weight: Weight,
      top: centerVertex1.y - GRAPHSIZES.Top,
      left: centerVertex1.x - GRAPHSIZES.Left,
      angle: Angle,
      startVertex: parseInt(inputFirstIndex),
      endVertex: parseInt(inputSecondIndex),
      isShortest: false
    }

    dispatch(addEdge(newEdge))
    dispatch(addConnection([parseInt(inputFirstIndex), parseInt(inputSecondIndex), Weight]))

    setInputFirstIndex('')
    setInputSecondIndex('')
    
    // Вы можете также передать значение в Redux store здесь, если это необходимо
  };


  return (
    <div className={styles.block_adding_edge}>
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
      <SmallTemplateButton onClick = {handleSubmit} name={name}/>
    </div>

  )
}

export default AddEdgeForm