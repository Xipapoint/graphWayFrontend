import React from 'react'
import styles from './InputWeight.module.scss'

interface IInputWeightVertexProps{
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


const InputWeightVertex: React.FC<IInputWeightVertexProps> = ({value, onChange}) => {
  return (
    <input
    placeholder = 'Enter first index of vertex'
    type='text'
    value={value}
    onChange={onChange}
    className={styles.input_weight_edge}>
    
    </input>

  )
}

export default InputWeightVertex