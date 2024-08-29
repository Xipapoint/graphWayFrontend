import React, { useState } from 'react'

import styles from '../GraphPage.module.scss'
import GraphBLock from '../../../components/Graph/GraphBlock/components/GraphBLock'
import GraphInput from '../../../components/Graph/GraphInput/components/GraphInput'
import { GraphDTO } from '../../../entities/Graph/DTO/GraphDTO.dto';
import { IVertex } from '../../../entities/Graph/IVertex.interface';
import { IEdge } from '../../../entities/Graph/IEdge.interface';
import { IVertexCoordinates } from '../../../entities/Graph/IVertexCoordinates.interface';
import { addVertex, deleteVertex, moveByPixel, updateIsShortest, updatePair, updateVertexPosition } from './functions/vertex/vertexFunctions';
import { addEdge, deleteEdge, deleteEdgesByVertex, updateEdgePosition } from './functions/edge/edgeFunctions';
import { IEdgeDetails } from '../../../entities/Graph/IEdgeDetails.interface';
import { addConnection, deleteConnectionsByVertex, updateConnectionWeight } from './functions/graph/graphFunctions';


interface GraphTemplateProps{
  nameAlghorithm: string
}

const GraphTemplate:React.FC<GraphTemplateProps> = ({nameAlghorithm}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [vertices, setVertices] = useState<IVertex[]>([])
  const [edges, setEdges] = useState<IEdge[]>([])
  const [connections, setConnections] = useState<Map<number, [number, number][]>>(new Map());

  let graphDto: GraphDTO = {
    DTOvertices: vertices,
    DTOedges: edges,
    DTOconnections: connections,
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
      const newVertices = moveByPixel(vertices, index)
      setVertices(newVertices)
    },
    handleUpdatePair: (vertices: IVertex[], copyPair: number[][]) => {
      const newVertices = updatePair(vertices, copyPair)
      setVertices(newVertices)
    },
    handleUpdateIsShortest: (vertices: IVertex[], shortestWay: number[][], index: number) => {
      const newVertices = updateIsShortest(vertices, shortestWay, index)
      setVertices(newVertices);
    }
  }

  const edgesFunctions = {
    handleAddEdge: (edges: IEdge[], pushedEdge: IEdge) => {
      const result = addEdge(edges, pushedEdge)
      if(typeof result !== 'number'){
        setEdges([...edges, result])
      } else{
        alert("Couldn`t add connection")
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
    },

    // Connection functions
    handleAddConnection: (connections: Map<number, [number, number][]>, pushedConnection: [number, number, number]) => {
      const result = addConnection(connections, pushedConnection)
      if(typeof result !== 'number'){
        setConnections(result)
      } else{
        alert("Couldn`t add connection")
      }
    },
    handleUpdateConnectionWeight: (connections: Map<number, [number, number][]>, connection: [number, number, number]) => {
      const newConnections = updateConnectionWeight(connections, connection)
      setConnections(newConnections)
    },
    handleDeleteConnectionsByVertex: (connections: Map<number, [number, number][]>, index: number) => {
      const newConnections = deleteConnectionsByVertex(connections, index)
      setConnections(newConnections)
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