import styles from '../../GraphPage.module.scss'
import { useState } from 'react'
import TreeInput from '../../../../components/Tree/TreeInput/components/TreeInput'
import TreeBlock from '../../../../components/Tree/TreeBlock/TreeBlock'


interface TreeTemplateProps{
  nameAlghorithm: string
}

const TreeTemplate:React.FC<TreeTemplateProps> = ({nameAlghorithm}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
    // const [vertices, setVertices] = useState<IVertex[]>([])

  const handleEditModeChange = (newValue: boolean) => {
    setEditMode(newValue);
  };



  return (
    <div className={styles.container} style={{flexDirection:'column'}}>
        <TreeInput onEditModeChange={handleEditModeChange} nameAlghorithm={nameAlghorithm}/>
        <TreeBlock editMode={editMode}/>
    </div>
  )
}

export default TreeTemplate