import styles from './treeButton.module.scss'

interface TreeUiAddVertexButtonProps {
    onClick: () => void;
  }

const TreeUiAddVertexButton: React.FC<TreeUiAddVertexButtonProps> = ({onClick}) => {
  return (
    <button onClick={onClick} className={[styles.templateButton, styles.graphButton].join(' ')}>
        Add vertex
    </button>
  )
}

export default TreeUiAddVertexButton