import React, { useState } from 'react'

import styles from '../GraphPage.module.scss'
import GraphBLock from '../../../components/Graph/GraphBlock/components/GraphBLock'
import GraphInput from '../../../components/Graph/GraphInput/components/GraphInput'
import { GraphDTO } from '../../../entities/Graph/DTO/GraphDTO.dto';
import { IVertex } from '../../../entities/Graph/IVertex.interface';
import { IEdge } from '../../../entities/Graph/IEdge.interface';
import { IVertexCoordinates } from '../../../entities/Graph/IVertexCoordinates.interface';
import { addVertex, deleteVertex, moveByPixel, updatePair, updateVertexPosition } from './functions/vertex/vertexFunctions';
import { addEdge, deleteEdge, deleteEdgesByVertex, updateEdgePosition } from './functions/edge/edgeFunctions';
import { IEdgeDetails } from '../../../entities/Graph/IEdgeDetails.interface';


interface GraphTemplateProps{
  nameAlghorithm: string
}

const GraphTemplate:React.FC<GraphTemplateProps> = ({nameAlghorithm}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [vertices, setVertices] = useState<IVertex[]>([])
  const [edges, setEdges] = useState<IEdge[]>([])
  const [graphVertices, setGraphVertices] = useState<number[]>([]);
 // const [pair, setPair] = useState<number[][]>([]);
  const [connections, setConnections] = useState<{ [key: number]: [number, number][] }>({});
  const [shortestVertices, setShortestVertices] = useState<number[][]>([]);

  let graphDto: GraphDTO = {
    DTOvertices: vertices,
    DTOedges: edges,
    DTOgraphVertices: graphVertices,
   // DTOpair: pair,
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
    },
    handleMoveByPixel: (vertices: IVertex[], index: number) => {
      let newVertices = moveByPixel(vertices, index)
      setVertices(newVertices)
    },
    handleUpdatePair: (vertices: IVertex[], copyPair: number[][]) => {
      let newVertices = updatePair(vertices, copyPair)
      setVertices(newVertices)
    }
  }

  const edgesFunctions = {
    handleAddEdge: (edges: IEdge[], pushedEdge: IEdge) => {
      const result = addEdge(edges, pushedEdge)
      if(typeof result !== 'number'){
        setEdges([...edges, result])
      }
    },
    handleDeleteEdge: (edges: IEdge[], index: number) => {
      const newEdges = deleteEdge(edges, index)
      setEdges(newEdges)
    },
    handleUpdateEdgePosition: (edges: IEdge[], edgeDetails: IEdgeDetails) => {
      const newEdges = updateEdgePosition(edges, edgeDetails)
      setEdges(newEdges)
    },
    handleDeleteEdgesByVertex: (edges: IEdge[], index: number) => {
      const newEdges = deleteEdgesByVertex(edges, index)
      setEdges(newEdges)
    }
  }

  return (
    <div className={styles.container}>
        <GraphInput verticesFunctions={verticesFunctions} edgesFunctions={edgesFunctions} graphDto={graphDto} onEditModeChange={handleEditModeChange} nameAlghorithm={nameAlghorithm}/>
        <GraphBLock verticesFunctions={verticesFunctions} edgesFunctions={edgesFunctions} graphDto={graphDto} editMode={editMode}/>
    </div>
  )
}

export default GraphTemplate