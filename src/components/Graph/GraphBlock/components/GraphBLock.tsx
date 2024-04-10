
import styles from './graphBlock.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/redux';
import { vertexSlice } from '../../../../store/reducers/VertexSlice';
import { edgeSlice } from '../../../../store/reducers/EdgeSlice';
import { graphSlice } from '../../../../store/reducers/GraphSlice';
import { useState } from 'react';
import UiVertex from '../../GraphUi/Vertex/GraphUiVertex';
import UiEdge from '../../GraphUi/Edge/UiEdge';
import { IVertex } from '../../../../entities/Graph/IVertex.interface';
import { GraphDTO } from '../../../../entities/Graph/DTO/GraphDTO.dto';
import { IVertexCoordinates } from '../../../../entities/Graph/IVertexCoordinates.interface';
import { IEdgeDetails } from '../../../../entities/Graph/IEdgeDetails.interface';
import { IEdge } from '../../../../entities/Graph/IEdge.interface';


interface GraphBlockProps {
  editMode: boolean;
  graphDto: GraphDTO,
  verticesFunctions: {
    handleDeleteVertex: (vertices: IVertex[], index: number) => void
    handleUpdateVertexPosition: (vertices: IVertex[], vertexCoordinate: IVertexCoordinates) => void
  }
  edgesFunctions: {
    handleDeleteEdge: (edges: IEdge[], index: number) => void
    handleUpdateEdgePosition: (edges: IEdge[], edgeDetails: IEdgeDetails) => void
    handleDeleteEdgesByVertex: (edges: IEdge[], index: number) => void
    handleUpdateConnectionWeight: (connections: { [key: number]: [number, number][] }, connection: [number, number, number]) => void
    handleDeleteConnectionsByVertex: (connections: { [key: number]: [number, number][] }, index: number) => void
  }
}


const GraphBLock: React.FC<GraphBlockProps> = ({editMode, graphDto, verticesFunctions, edgesFunctions}) => {

  const handleVertexPositionUpdate = (id: number, xPos: number, yPos: number) => {
   // dispatch(updateVertexPosition({id, xPos, yPos})); // Вызываем экшен для обновления позиции вершины в Redux-хранилище
   verticesFunctions.handleUpdateVertexPosition(graphDto.DTOvertices, {id, xPos, yPos});
  };

  const handleEdgePositionUpdate = (id: number, weight: number, left: number, top: number, angle: number) => {
    edgesFunctions.handleUpdateEdgePosition(graphDto.DTOedges, {id, weight, left, top, angle}); // Вызываем экшен для обновления позиции вершины в Redux-хранилище
  };

  const handleConnectionWeightUpdate = (weight: number, startVertex: number, endVertex: number) =>{
    edgesFunctions.handleUpdateConnectionWeight(graphDto.DTOconnections, [startVertex, endVertex, weight])
  }


  const handleDeleteVertex= (id: number) =>{
    edgesFunctions.handleDeleteConnectionsByVertex(graphDto.DTOconnections, id)
    verticesFunctions.handleDeleteVertex(graphDto.DTOvertices, id)
    edgesFunctions.handleDeleteEdgesByVertex(graphDto.DTOedges, id)
  }

  const handleDeleteEdge = (id: number) =>{

  }


        //To get the current width for block and put in GRAPGHSIZES. Height gets the same just change to 'clientHeight'

        // const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        // const pxWidth = (70.8 / 100) * viewportWidth;
        // console.log(pxWidth);


  return (
    
    <div className={styles.graph_block} id='graph'>

        {graphDto.DTOvertices.map(vertex => (
          <UiVertex
            isShortestVertex={vertex.isShortest}
            draggable={true}
            key={vertex.id}
            id={vertex.id} 
            xPos={vertex.xPos} 
            yPos = {vertex.yPos}
            pair={vertex.pair}
            updateVertexPosition={handleVertexPositionUpdate}
            handleDeleteVertex = {handleDeleteVertex}
            editMode = {editMode}
          />
        ))}

        {graphDto.DTOedges.map(edge => (
          <UiEdge 
          key={edge.id} 
          id={edge.id} 
          left={edge.left} 
          top={edge.top} 
          angle = {edge.angle} 
          weight = {edge.weight} 
          vertices={graphDto.DTOvertices} 
          startVertex={edge.startVertex}
          endVertex={edge.endVertex}
          updateEdgePosition = {handleEdgePositionUpdate}
          updateConnectionWeight = {handleConnectionWeightUpdate}
          />
        ))}
    </div>
  )
}

export default GraphBLock