import React from 'react'
import styles from './treeVertex.module.scss'

interface TreeUiVertexProps {
    id: number,
    xPos: number;
    yPos: number;
    handleDeleteVertex: (id: number) => void,
    editMode: boolean
  }

const TreeUiVertex: React.FC<TreeUiVertexProps> = ({id, xPos, yPos, handleDeleteVertex, editMode}) => {



    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        handleDeleteVertex(id); // Передаем id в функцию handleDeleteVertex
      };
    
    return (
        <div
         onClick={ editMode ? handleClick : undefined}
         data-vertex-id = {id} 
         className={`${styles.vertice} ${editMode ? styles.editVertexMode : ''}` }
         style={{left: xPos, top: yPos}}
         id={id.toString()}
         >
            {id}
        </div>
      )
}

export default TreeUiVertex