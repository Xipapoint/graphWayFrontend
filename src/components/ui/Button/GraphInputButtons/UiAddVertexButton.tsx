import styles from './addButton.module.scss';
import React from 'react';

interface TemplateButtonProps {
    name: string;
    onClick: () => void;
  }

const UiAddVertexButton: React.FC<TemplateButtonProps> = ({onClick, name}) => {
  return (
    <button onClick={onClick} className={[styles.templateButton, styles.graphButton].join(' ')}>
        {name}
    </button>
  )
}

export default UiAddVertexButton