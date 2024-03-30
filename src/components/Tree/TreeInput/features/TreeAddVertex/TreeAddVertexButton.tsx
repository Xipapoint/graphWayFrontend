import { useState } from "react";
import { IVertex } from "../../../../../entities/Graph/models/interfaces/IVertex.interface";
import { TREEBLOCKSIZES } from "../../../../../shared/constants/graphConstants";
import { treeGenerateCoord } from '../../../../../shared/helpers/RandomCoord';
import { useAppDispatch, useAppSelector } from "../../../../../shared/hooks/redux";
import { graphSlice } from "../../../../../store/reducers/GraphSlice";
import { vertexSlice } from "../../../../../store/reducers/VertexSlice";
import TreeUiAddVertexButton from "../../../TreeUi/TreeButton/TreeUiAddVertexButton";
import { BinaryTree } from "../BinaryTree/BinaryTree";

const TreeAddVertexButton = () => {
    // let [widthState, setWidthState] = useState<number>(TREEBLOCKSIZES.Width)
    // let [heightState, setHeightState] = useState<number>(0)
    const [binaryTree, setBinaryTree] = useState<BinaryTree>(new BinaryTree())

    const {vertices, isLoading, error} = useAppSelector(state => state.vertexReducer)
    const {graphVertices} = useAppSelector(state => state.graphReducer)
    let lastVertexId = useAppSelector(state => state.vertexReducer.lastVertexId);
    const dispatch = useAppDispatch()
    const { addVertex } = vertexSlice.actions
    const { addGraphVertex, addPair} = graphSlice.actions

    
  // const binaryTree = new BinaryTree();
  
    const handleAddVertex = () => {
      console.log("binary tree:", binaryTree);


    let xPos: number = binaryTree.lastAddedNode?.xPos || treeGenerateCoord(TREEBLOCKSIZES.Width)
    let yPos:number = binaryTree.lastAddedNode?.yPos || 0
    // setWidthState(prevWidthState => prevWidthState - 70)
    // setHeightState(prevHeightState => prevHeightState + 50)
    console.log(lastVertexId);      
    if(vertices.length === 0){
      lastVertexId = 0
    }

    binaryTree.insert(lastVertexId, xPos, yPos)

    for (let i = 0; i < vertices.length; i++) {
      if (vertices[i].id === lastVertexId) {
          lastVertexId += 1;
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
        
        const newVertex: IVertex = {
          id: lastVertexId,
          xPos: xPos,
          yPos: yPos,
          pair: [Number.MAX_VALUE, 0],
          isShortest: false
        };
        dispatch(addVertex(newVertex));
        dispatch(addGraphVertex(lastVertexId))
        dispatch(addPair([Number.MAX_VALUE, 0]))
        console.log(graphVertices);
      }
      // console.log("wow");
    };
  
    return (
      <TreeUiAddVertexButton onClick ={handleAddVertex}/>
    )
  }
  
  export default TreeAddVertexButton