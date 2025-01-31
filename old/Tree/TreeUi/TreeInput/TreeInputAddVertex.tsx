import React from 'react'
import styles from './treeInput.module.scss'

interface TreeInputAddVertexrops{
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
  

const TreeInputAddVertex:React.FC<TreeInputAddVertexrops> = ({value, onChange}) => {
    return (
        <input
        placeholder = 'Enter index of vertex'
        type='text'
        value={value}
        onChange={onChange}
        className={styles.input_vertex}>
        
        </input>
    
      )
}

export default TreeInputAddVertex