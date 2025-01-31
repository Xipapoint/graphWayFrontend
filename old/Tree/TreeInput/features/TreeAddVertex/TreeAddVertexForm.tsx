import { useState } from "react";
import { IVertex } from "../../../../../entities/Graph/IVertex.interface";
import { TREEBLOCKSIZES } from "../../../../../shared/constants/graphConstants";
import { treeGenerateCoord } from '../../../../../shared/helpers/RandomCoord';
import { useAppDispatch, useAppSelector } from "../../../../../shared/hooks/redux";
import { graphSlice } from "../../../../store/reducers/GraphSlice";
import { vertexSlice } from "../../../../store/reducers/VertexSlice";
import TreeUiAddVertexButton from "../../../TreeUi/TreeButton/TreeUiAddVertexButton";
import { BinaryTree } from "../BinaryTree/BinaryTree";
import { PriorityQueue } from "../../../../old/Graph/GraphInput/features/FindShortestWay/PriorityQueue";
import TreeInputAddVertex from "../../../TreeUi/TreeInput/TreeInputAddVertex";



const TreeAddVertexForm = () => {
    const [binaryTree, setBinaryTree] = useState<BinaryTree>(new BinaryTree())
    const [inputIndex, setInputIndex] = useState<string>('');
    const {vertices, isLoading, error} = useAppSelector(state => state.vertexReducer)
    const {graphVertices} = useAppSelector(state => state.graphReducer)
    // let lastVertexId = useAppSelector(state => state.vertexReducer.lastVertexId);
    const dispatch = useAppDispatch()
    const { addVertex, moveByPixel, updateVertexPosition } = vertexSlice.actions
    const { addGraphVertex, addPair} = graphSlice.actions

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputIndex(event.target.value);
      console.log(inputIndex);
    };
  
    let lastVertexId = parseInt(inputIndex)
  
    const handleAddVertex = () => {
      if (!/^-?\d+$/.test(inputIndex)) {
        alert("Please, input correct index");
        return;
      }
      console.log("binary tree:", binaryTree);

      let xPos: number = binaryTree.lastAddedNode?.xPos || treeGenerateCoord(TREEBLOCKSIZES.Width)
      let yPos:number = binaryTree.lastAddedNode?.yPos || 0
      console.log(lastVertexId);      
      binaryTree.insert(lastVertexId, xPos, yPos, treeGenerateCoord(TREEBLOCKSIZES.Width))
      if(binaryTree.lastAddedNode?.parent?.xPos !== xPos){
        // Код для обновления вершин в состоянии и соответственно в отрисовке
      }

      for (let i = 0; i < vertices.length; i++) {
        if (vertices[i].id === lastVertexId) {
            alert("such vertex already exists")
            return
        }
      }

      if(binaryTree.lastAddedNode){
        xPos = binaryTree.lastAddedNode.xPos
        yPos = binaryTree.lastAddedNode.yPos
        if(xPos > TREEBLOCKSIZES.Width || yPos < 0){
          console.log("Block is full");
          return
        }
        if(yPos > TREEBLOCKSIZES.Height){
          console.log("Block is full");
          return
        }
      }
      console.log(lastVertexId);
      console.log("binary tree:", binaryTree);
      
      if(binaryTree.lastAddedNode){
        console.log("last added node: ", binaryTree.lastAddedNode);
        console.log("coords for last added node: ", `(${binaryTree.lastAddedNode.xPos}, ${binaryTree.lastAddedNode.yPos})`);
        
        // const newVertex: IVertex = {
        //   id: lastVertexId,
        //   xPos: xPos,
        //   yPos: yPos,
        //   pair: [Number.MAX_VALUE, 0],
        //   isShortest: false
        // };
        // dispatch(addVertex(newVertex));
        // dispatch(addGraphVertex(lastVertexId))
        // dispatch(addPair([Number.MAX_VALUE, 0]))
        // console.log(graphVertices);

        setInputIndex('')
      }
      // console.log("wow");
    };

    const handleAddEdge = () => {

    }
  
    return (
      <div>
        <TreeInputAddVertex value={inputIndex} onChange={handleInputChange}/>
        <TreeUiAddVertexButton onClick ={handleAddVertex}/>
      </div>

    )
  }
  
  export default TreeAddVertexForm