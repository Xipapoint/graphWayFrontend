import styles from './addButton.module.scss';

interface FindShortestWayButtonProps {
  name: string;
  onClick: () => void;
}

const FindShortestWayButton: React.FC<FindShortestWayButtonProps> = ({onClick}) => {
  return (
    <button onClick={onClick} className={[styles.findWayButton, styles.graphButton].join(' ')}>
        Find shortest way
    </button>
  )
}

export default FindShortestWayButton