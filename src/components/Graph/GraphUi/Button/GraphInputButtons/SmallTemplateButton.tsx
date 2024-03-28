import React from 'react';
import styles from './addButton.module.scss';

interface TemplateButtonProps {
    name: string;
    onClick: () => void
  }


const SmallTemplateButton: React.FC<TemplateButtonProps> = ({onClick, name}) => {
  return (
    <button onClick={onClick} className={[styles.smallTemplateButton, styles.graphButton].join(' ')}>
        {name}
    </button>
  )
}

export default SmallTemplateButton