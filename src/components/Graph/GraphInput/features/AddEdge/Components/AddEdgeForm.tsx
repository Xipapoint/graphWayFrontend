import React, { useMemo, useRef, useState } from 'react'
import styles from './AddEdgeForm.module.scss'
import { getVertexCenterCoords } from '../../../../../../shared/helpers/GetVertexCenterCoords'
import { calculateWeight } from '../../../../../../shared/helpers/CalculateWeight'
import { IEdge } from '../../../../../../entities/Graph/IEdge.interface'
import { calculateAngle } from '../../../../../../shared/helpers/CalculateAngle'
import { GRAPHSIZES } from '../../../../../../shared/constants/graphConstants'
import InputWeightVertex from '../../../../GraphUi/Input/GraphInputs/InputWeightVertex'
import SmallTemplateButton from '../../../../GraphUi/Button/GraphInputButtons/SmallTemplateButton'
import { IVertex } from '../../../../../../entities/Graph/IVertex.interface'


interface AddEdgeFormProps{
  AEForm: {
    edges: IEdge[]
    vertices: IVertex[]
    connections: Map<number, [number, number][]>
    addEdgeAEForm: (edges: IEdge[], pushedEdge: IEdge) => void
    addConnectionAEForm: (connections: Map<number, [number, number][]>, pushedConnection: [number, number, number]) => void
  }
}

let edgeId: number = 0;


const AddEdgeForm:React.FC<AddEdgeFormProps> = ({AEForm}) => {
  const [inputFirstIndex, setInputFirstIndex] = useState('')
  const [inputSecondIndex, setInputSecondIndex] = useState('')


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
      
      id: edgeId,
      weight: Weight,
      top: centerVertex1.y - GRAPHSIZES.Top,
      left: centerVertex1.x - GRAPHSIZES.Left,
      angle: Angle,
      startVertex: parseInt(inputFirstIndex),
      endVertex: parseInt(inputSecondIndex),
      isShortest: false
    }

    AEForm.addEdgeAEForm(AEForm.edges, newEdge)
    AEForm.addConnectionAEForm(AEForm.connections, [parseInt(inputFirstIndex), parseInt(inputSecondIndex), Weight])
    edgeId++
    
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
      <SmallTemplateButton onClick = {handleSubmit}/>
    </div>

  )
}

export default AddEdgeForm