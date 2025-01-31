import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux';
import { edgeSlice } from '../../store/reducers/EdgeSlice';
import { vertexSlice } from '../../store/reducers/VertexSlice';
import { graphSlice } from '../../store/reducers/GraphSlice';
import TreeUiVertex from '../TreeUi/TreeUiVertex/TreeUiVertex';
import styles from './treeBlock.module.scss'


interface TreeBlockProps {
    editMode: boolean;
  }

const TreeBlock: React.FC<TreeBlockProps> = ({editMode}) => {
    const {vertices} = useAppSelector(state => state.vertexReducer)
    const {edges} = useAppSelector(state => state.edgeReducer)
    const {deleteVertex} = vertexSlice.actions
    const {deleteEdgesByVertex} = edgeSlice.actions
    const {deleteConnectionsByVertex, deleteGraphVertex} = graphSlice.actions
    const dispatch = useAppDispatch();

    const handleDeleteVertex= (id: number) =>{
        dispatch(deleteConnectionsByVertex(id))
        dispatch(deleteGraphVertex(id))
        dispatch(deleteVertex(id))
        dispatch(deleteEdgesByVertex(id))
      }


      //To get the current width for block. Height gets the same just change to 'clientHeight'

        // const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        // const pxWidth = (95 / 100) * viewportWidth;
        // console.log(pxWidth);



  return (
    <div className={styles.tree_block} id='graph'>

        {vertices.map(vertex => (
          <TreeUiVertex
            key={vertex.id}
            id={vertex.id} 
            xPos={vertex.xPos} 
            yPos = {vertex.yPos}
            handleDeleteVertex = {handleDeleteVertex}
            editMode = {editMode}
          />
        ))}

        {/* {edges.map(edge => (
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
        ))} */}
    </div>
  )
}

export default TreeBlock