import React, { useState } from 'react'
import styles from './GraphInput.module.scss'
import AddGraphVertexButton from '../features/AddVertex/AddGraphVertexButton';
import AddEdgeForm from '../features/AddEdge/Components/AddEdgeForm';
import FindShortestWayForm from '../features/FindShortestWay/FindShortestWayForm';
import { GraphDTO } from '../../../../entities/Graph/DTO/GraphDTO.dto';
import { IVertex } from '../../../../entities/Graph/IVertex.interface';
import { IVertexCoordinates } from '../../../../entities/Graph/IVertexCoordinates.interface';
import { IEdge } from '../../../../entities/Graph/IEdge.interface';
import { IEdgeDetails } from '../../../../entities/Graph/IEdgeDetails.interface';


interface GraphInputProps{
  nameAlghorithm:string,
  onEditModeChange: (editMode: boolean) => void,
  graphDto: GraphDTO,
  verticesFunctions: {
    handleAddVertex: (vertex: IVertex) => void,
    handleDeleteVertex: (vertices: IVertex[], index: number) => void
    handleUpdateVertexPosition: (vertices: IVertex[], vertexCoordinate: IVertexCoordinates) => void
    handleMoveByPixel: (vertices: IVertex[], index: number) => void
    handleUpdatePair: (vertices: IVertex[], copyPair: number[][]) => void
    handleUpdateIsShortest: (vertices: IVertex[], shortestWay: number[][], index: number) => void
  }
  edgesFunctions: {
    handleAddEdge: (edges: IEdge[], pushedEdge: IEdge) => void
    handleDeleteEdge: (edges: IEdge[], index: number) => void
    handleUpdateEdgePosition: (edges: IEdge[], edgeDetails: IEdgeDetails) => void
    handleDeleteEdgesByVertex: (edges: IEdge[], index: number) => void
    handleAddConnection: (connections: { [key: number]: [number, number][] }, pushedConnection: [number, number, number]) => void
    handleUpdateConnectionWeight: (connections: { [key: number]: [number, number][] }, connection: [number, number, number]) => void
    handleDeleteConnectionsByVertex: (connections: { [key: number]: [number, number][] }, index: number) => void
  }
}


const GraphInput:React.FC<GraphInputProps> = ({nameAlghorithm, onEditModeChange, graphDto, verticesFunctions, edgesFunctions}) => {
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

  // const handleAddVertex = (vertex: IVertex) => {
  //   verticesFunctions.handleAddVertex(vertex)
  // }

  const FSWForm = {
    connections: graphDto.DTOconnections,
    vertices: graphDto.DTOvertices,
    edges: graphDto.DTOedges,
    moveByPixelFSW: (vertices: IVertex[], index: number) => {
      verticesFunctions.handleMoveByPixel(vertices, index)
    },
    updatePairFSW: (verices: IVertex[], copyPair: number[][]) => {
      verticesFunctions.handleUpdatePair(verices, copyPair)
    },
    updateIsShortest: (vertices: IVertex[], shortestWay: number[][], index: number) => {
      verticesFunctions.handleUpdateIsShortest(vertices, shortestWay, index)
    }
  }

  const AEForm = {
    vertices: graphDto.DTOvertices,
    edges: graphDto.DTOedges,
    connections: graphDto.DTOconnections,
    addEdgeAEForm: (edges: IEdge[], pushedEdge: IEdge) => {
      edgesFunctions.handleAddEdge(edges, pushedEdge)
    },
    addConnectionAEForm: (connections: { [key: number]: [number, number][] }, pushedConnection: [number, number, number]) => {
      edgesFunctions.handleAddConnection(connections, pushedConnection)
    },
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
        <AddGraphVertexButton vertices={graphDto.DTOvertices} handleAddVertex={verticesFunctions.handleAddVertex}/>
        <AddEdgeForm name={''} AEForm={AEForm}/>
        <FindShortestWayForm FSWForm={FSWForm} nameAlghorithm={nameAlghorithm} debugMode={debugMode}/>
    </div>
  )
}

export default GraphInput