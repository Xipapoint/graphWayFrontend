import React, { useState } from 'react'

import styles from './GraphPage.module.scss'
import GraphInput from '../../../components/GraphInput/components/GraphInput'
import GraphBLock from '../../../components/GraphBlock/components/GraphBLock'


interface GraphTemplateProps{
  nameAlghorithm: string
}

const GraphTemplate:React.FC<GraphTemplateProps> = ({nameAlghorithm}) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleEditModeChange = (newValue: boolean) => {
    setEditMode(newValue);
  };

  return (
    <div className={styles.container}>
        <GraphInput onEditModeChange={handleEditModeChange} nameAlghorithm={nameAlghorithm}/>
        <GraphBLock editMode={editMode}/>
    </div>
  )
}

export default GraphTemplate