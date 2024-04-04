import React, { useState } from 'react'
import styles from './GraphInput.module.scss'
import AddGraphVertexButton from '../features/AddVertex/AddGraphVertexButton';
import AddEdgeForm from '../features/AddEdge/Components/AddEdgeForm';
import FindShortestWayForm from '../features/FindShortestWay/FindShortestWayForm';
import { GraphDTO } from '../../../../entities/Graph/DTO/GraphDTO.dto';


interface GraphInputProps{
  nameAlghorithm:string,
  onEditModeChange: (editMode: boolean) => void,
  graphDto: GraphDTO
}


const GraphInput:React.FC<GraphInputProps> = ({nameAlghorithm, onEditModeChange, graphDto}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [debugMode, setDebugMode] = useState<boolean>(false);

  const handleChangeEditMode = () =>{
    if(editMode){
      setEditMode(false);
      onEditModeChange(false);
    } else{
      setEditMode(true)
      onEditModeChange(true);
    }
  }

  const handleChangeDebugMode = () => {
    if(debugMode){
      setDebugMode(false);
    } else{
      setEditMode(true)
    }
  }

  return (
    <div className={styles.graph_input_block}>
        <h2 className={styles.heading}>
          Create graph!
        </h2>
        <button onClick={handleChangeEditMode}>
          Edit mode
        </button>
        <button onClick={handleChangeDebugMode}>
          debug mode
        </button>
        <AddGraphVertexButton/>
        <AddEdgeForm/>
        <FindShortestWayForm nameAlghorithm={nameAlghorithm} debugMode={debugMode}/>
    </div>
  )
}

export default GraphInput