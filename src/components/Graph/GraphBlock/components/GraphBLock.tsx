
import styles from './graphBlock.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/redux';
import { vertexSlice } from '../../../../store/reducers/VertexSlice';
import { edgeSlice } from '../../../../store/reducers/EdgeSlice';
import { graphSlice } from '../../../../store/reducers/GraphSlice';
import { useState } from 'react';
import UiVertex from '../../GraphUi/Vertex/GraphUiVertex';
import UiEdge from '../../GraphUi/Edge/UiEdge';
import { IVertex } from '../../../../entities/Graph/IVertex.interface';


interface GraphBlockProps {
  editMode: boolean;
}


const GraphBLock: React.FC<GraphBlockProps> = ({editMode}) => {
  const {vertices} = useAppSelector(state => state.vertexReducer)
  const {shortestVertices, pair} = useAppSelector(state => state.graphReducer)
  const {edges} = useAppSelector(state => state.edgeReducer)
  const {updateVertexPosition, deleteVertex} = vertexSlice.actions
  const {updateEdgePosition, deleteEdgesByVertex} = edgeSlice.actions
  const {updateConnectionWeight, deleteConnectionsByVertex, deleteGraphVertex} = graphSlice.actions
  const dispatch = useAppDispatch();




  const handleVertexPositionUpdate = (id: number, xPos: number, yPos: number) => {
    dispatch(updateVertexPosition({id, xPos, yPos})); // Вызываем экшен для обновления позиции вершины в Redux-хранилище
  };

  const handleEdgePositionUpdate = (id: number, weight: number, left: number, top: number, angle: number) => {
    dispatch(updateEdgePosition({id, weight, left, top, angle})); // Вызываем экшен для обновления позиции вершины в Redux-хранилище
  };

  const handleConnectionWeightUpdate = (weight: number, startVertex: number, endVertex: number) =>{
    dispatch(updateConnectionWeight([startVertex, endVertex, weight]))
  }


  const handleDeleteVertex= (id: number) =>{
    dispatch(deleteConnectionsByVertex(id))
    dispatch(deleteGraphVertex(id))
    dispatch(deleteVertex(id))
    dispatch(deleteEdgesByVertex(id))
  }

  const handleDeleteEdge = (id: number) =>{

  }


        //To get the current width for block and put in GRAPGHSIZES. Height gets the same just change to 'clientHeight'

        // const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        // const pxWidth = (70.8 / 100) * viewportWidth;
        // console.log(pxWidth);


  return (
    
    <div className={styles.graph_block} id='graph'>

        {vertices.map(vertex => (
          <UiVertex
            shortestVertices={shortestVertices}
            draggable={true}
            key={vertex.id}
            id={vertex.id} 
            xPos={vertex.xPos} 
            yPos = {vertex.yPos}
            pair={pair}
            updateVertexPosition={handleVertexPositionUpdate}
            handleDeleteVertex = {handleDeleteVertex}
            editMode = {editMode}
          />
        ))}

        {edges.map(edge => (
          <UiEdge 
          key={edge.id} 
          id={edge.id} 
          left={edge.left} 
          top={edge.top} 
          angle = {edge.angle} 
          weight = {edge.weight} 
          vertices={vertices} 
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