import styles from './addButton.module.scss';
import React from 'react';

interface TemplateButtonProps {
    onClick: () => void;
  }

const UiAddVertexButton: React.FC<TemplateButtonProps> = ({onClick}) => {
  return (
    <button onClick={onClick} className={[styles.templateButton, styles.graphButton].join(' ')}>
        Add vertex
    </button>
  )
}

export default UiAddVertexButton