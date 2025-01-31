
import TreeAddVertexForm from '../features/TreeAddVertex/TreeAddVertexForm'
import styles from './treeInput.module.scss'

interface TreeInputProps{
    nameAlghorithm:string,
    onEditModeChange: (editMode: boolean) => void,
}

const TreeInput:React.FC<TreeInputProps> = ({nameAlghorithm, onEditModeChange}) => {
    return(
        <div className={styles.tree_input_block}>
            <TreeAddVertexForm/>
        </div>
    )
}


export default TreeInput