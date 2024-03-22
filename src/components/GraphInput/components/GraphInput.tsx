import React, { useState } from 'react'
import { AddEdgeForm, AddVertexButton, FindShortestWayForm } from '../features'
import styles from './GraphInput.module.scss'

interface GraphInputProps{
  nameAlghorithm:string,
  onEditModeChange: (editMode: boolean) => void,
}


const GraphInput:React.FC<GraphInputProps> = ({nameAlghorithm, onEditModeChange}) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleChangeEditMode = () =>{
    if(editMode){
      setEditMode(false);
      onEditModeChange(false);
    } else{
      setEditMode(true)
      onEditModeChange(true);
    }
  }

  return (
    <div className={styles.input_block}>
        <h2 className={styles.heading}>
          Create graph!
        </h2>
        <button onClick={handleChangeEditMode}>
          Edit mode
        </button>
        <AddVertexButton/>
        <AddEdgeForm/>
        <FindShortestWayForm nameAlghorithm={nameAlghorithm}/>
    </div>
  )
}

export default GraphInput