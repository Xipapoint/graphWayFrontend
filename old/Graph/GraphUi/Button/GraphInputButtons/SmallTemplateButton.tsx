import React from 'react';
import styles from './addButton.module.scss';

interface TemplateButtonProps {
    onClick: () => void
  }


const SmallTemplateButton: React.FC<TemplateButtonProps> = ({onClick}) => {
  return (
    <button onClick={onClick} className={[styles.smallTemplateButton, styles.graphButton].join(' ')}>
        Add edge
    </button>
  )
}

export default SmallTemplateButton