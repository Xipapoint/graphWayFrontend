import React, { useState } from 'react'

import styles from '../GraphPage.module.scss'
import GraphBLock from '../../../components/Graph/GraphBlock/components/GraphBLock'
import GraphInput from '../../../components/Graph/GraphInput/components/GraphInput'


interface GraphTemplateProps{
  nameAlghorithm: string
}

const GraphTemplate:React.FC<GraphTemplateProps> = ({nameAlghorithm}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
    // const [vertices, setVertices] = useState<IVertex[]>([])
    // const [edges, setEdges] = useState<IEdge[]>([])
    // const [graphVertices, setGraphVertices] = useState<number[]>([]);
    // const [pair, setPair] = useState<number[][]>([]);
    // const [connections, setConnections] = useState<{ [key: number]: [number, number][] }>({});
    // const [shortestEdges, setShortestEdges] = useState<number[]>([]);
    // const [shortestVertices, setShortestVertices] = useState<number[]>([]);
    

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