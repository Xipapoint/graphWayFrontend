import React, { useState } from 'react'

import styles from '../GraphPage.module.scss'
import GraphBLock from '../../../components/Graph/GraphBlock/components/GraphBLock'
import GraphInput from '../../../components/Graph/GraphInput/components/GraphInput'
import { GraphDTO } from '../../../entities/Graph/DTO/GraphDTO.dto';
import { IVertex } from '../../../entities/Graph/IVertex.interface';
import { IEdge } from '../../../entities/Graph/IEdge.interface';
import { IVertexCoordinates } from '../../../entities/Graph/IVertexCoordinates.interface';
import { addVertex, deleteVertex, updateVertexPosition } from './functions/vertex/vertexFunctions';


interface GraphTemplateProps{
  nameAlghorithm: string
}

const GraphTemplate:React.FC<GraphTemplateProps> = ({nameAlghorithm}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [vertices, setVertices] = useState<IVertex[]>([])
  const [edges, setEdges] = useState<IEdge[]>([])
  const [graphVertices, setGraphVertices] = useState<number[]>([]);
  const [pair, setPair] = useState<number[][]>([]);
  const [connections, setConnections] = useState<{ [key: number]: [number, number][] }>({});
  const [shortestVertices, setShortestVertices] = useState<number[][]>([]);

  let graphDto: GraphDTO = {
    DTOvertices: vertices,
    DTOedges: edges,
    DTOgraphVertices: graphVertices,
    DTOpair: pair,
    DTOconnections: connections,
    DTOshortestVertices: shortestVertices
  }
    
  const handleEditModeChange = (newValue: boolean) => {
    setEditMode(newValue);
  };

  const verticesFunctions = {
    handleAddVertex: (vertex: IVertex) => {
      const newVertex = addVertex(vertex)
      setVertices([...vertices, newVertex])
    },
  
    handleDeleteVertex: (vertices: IVertex[], index: number) => {
      const newVertices = deleteVertex(vertices, index)
      setVertices(newVertices)
    },
  
    handleUpdateVertexPosition: (vertices: IVertex[], vertexCoordinate: IVertexCoordinates) =>{
      const newVertices = updateVertexPosition(vertices, vertexCoordinate)
      setVertices(newVertices)
    }
  }

  const edgesFunctions = {
    
  }



  return (
    <div className={styles.container}>
        <GraphInput graphDto={graphDto} onEditModeChange={handleEditModeChange} nameAlghorithm={nameAlghorithm}/>
        <GraphBLock graphDto={graphDto} editMode={editMode}/>
    </div>
  )
}

export default GraphTemplate