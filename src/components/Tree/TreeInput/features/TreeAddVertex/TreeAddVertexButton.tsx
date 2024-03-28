import { useState } from "react";
import { IVertex } from "../../../../../entities/Graph/models/interfaces/IVertex.interface";
import { TREEBLOCKSIZES } from "../../../../../shared/constants/graphConstants";
import { treeGenerateCoord } from '../../../../../shared/helpers/RandomCoord';
import { useAppDispatch, useAppSelector } from "../../../../../shared/hooks/redux";
import { graphSlice } from "../../../../../store/reducers/GraphSlice";
import { vertexSlice } from "../../../../../store/reducers/VertexSlice";
import TreeUiAddVertexButton from "../../../TreeUi/TreeButton/TreeUiAddVertexButton";

const TreeAddVertexButton = () => {
    let [widthState, setWidthState] = useState<number>(TREEBLOCKSIZES.Width)
    let [heightState, setHeightState] = useState<number>(0)

    const {vertices, isLoading, error} = useAppSelector(state => state.vertexReducer)
    const {graphVertices} = useAppSelector(state => state.graphReducer)
    let lastVertexId = useAppSelector(state => state.vertexReducer.lastVertexId);
    const dispatch = useAppDispatch()
    const { addVertex } = vertexSlice.actions
    const { addGraphVertex, addPair} = graphSlice.actions

  
    const handleAddVertex = () => {

    if(widthState > TREEBLOCKSIZES.Width || widthState < 0){
        console.log("Block is full");
        return
    }
    if(heightState > TREEBLOCKSIZES.Height){
        console.log("Block is full");
        return
    }
    let randXPos = treeGenerateCoord(widthState)
    let randYPos = heightState
    setWidthState(prevWidthState => prevWidthState - 70)
    setHeightState(prevHeightState => prevHeightState + 50)
    console.log(lastVertexId);

    if(vertices.length === 0){
        randXPos = treeGenerateCoord(TREEBLOCKSIZES.Width)
        randYPos = 0
        lastVertexId = 0
    }



      for (let i = 0; i < vertices.length; i++) {
        if (vertices[i].id === lastVertexId) {
            lastVertexId += 1;
        }
    }
  
      console.log(lastVertexId);
      const newVertex: IVertex = {
        id: lastVertexId,
        xPos: randXPos,
        yPos: randYPos,
        pair: [Number.MAX_VALUE, 0],
        isShortest: false
      };
      dispatch(addVertex(newVertex));
      dispatch(addGraphVertex(lastVertexId))
      dispatch(addPair([Number.MAX_VALUE, 0]))
      console.log(graphVertices);
      
      // console.log("wow");
    };
  
    return (
      <TreeUiAddVertexButton onClick ={handleAddVertex}/>
    )
  }
  
  export default TreeAddVertexButton