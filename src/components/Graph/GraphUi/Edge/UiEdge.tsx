import React, { useEffect, useRef } from 'react'
import styles from './edge.module.scss'
import { getVertexCoordsByIndex } from '../../../../shared/helpers/GetVertexCordsByIndex';
import { getVertexCenterCoords } from '../../../../shared/helpers/GetVertexCenterCoords';
import { calculateWeight } from '../../../../shared/helpers/CalculateWeight';
import { calculateAngle } from '../../../../shared/helpers/CalculateAngle';



interface UiEdgeProps {
  id: number,
  left: number,
  top: number,
  angle: number,
  weight: number,
  startVertex: number,
  endVertex:number,
  vertices: { id: number; xPos: number; yPos: number }[],
  updateEdgePosition: (id: number, weight: number, top: number, left: number, angle: number) => void,
  updateConnectionWeight: (startVertexId: number, endVertexId: number, WeightConnection: number) => void
}

const UiEdge: React.FC<UiEdgeProps> = ({id, left, top, angle, weight, vertices, updateEdgePosition, updateConnectionWeight, startVertex, endVertex}) => {

  const graph = document.getElementById('graph')
  const graphRect = graph?.getBoundingClientRect();
  let startX, startY;

  const startVertexCords = getVertexCoordsByIndex(vertices, startVertex);
  const endVertexCords = getVertexCoordsByIndex(vertices, endVertex);

  let dummy: number = 0;

  const angleRef = useRef(angle);
  const weightRef = useRef(weight);
  const leftRef = useRef(left);
  const topRef = useRef(top);
  useEffect(() => {
    const startVertexDiv = document.getElementById(startVertex.toString());
    const endVertexDiv = document.getElementById(endVertex.toString());



    if (startVertexDiv && endVertexDiv) {
      const startVertexCenterCords = getVertexCenterCoords(startVertexDiv);
      const endVertexCenterCords = getVertexCenterCoords(endVertexDiv);
      const calculatedWeight = calculateWeight(
        startVertexCenterCords,
        endVertexCenterCords
      );
      const calculatedAngle = calculateAngle(
        startVertexCenterCords,
        endVertexCenterCords
      );

      angleRef.current = calculatedAngle;
      weightRef.current = calculatedWeight;

      if (graphRect) {
        const newLeft = startVertexCenterCords.x - graphRect.left;
        const newTop = startVertexCenterCords.y - graphRect.top;


        // Check if any values have changed before updating
        if (
          newLeft !== leftRef.current ||
          newTop !== topRef.current ||
          calculatedWeight !== weightRef.current ||
          calculatedAngle !== angleRef.current
        ) {
          leftRef.current = newLeft;
          topRef.current = newTop;
          angleRef.current = calculatedAngle;
          weightRef.current = calculatedWeight;
          updateEdgePosition(
            id,
            weightRef.current,
            topRef.current,
            leftRef.current,
            angleRef.current
          );
          updateConnectionWeight(
            startVertex,
            endVertex,
            weightRef.current
          )
        }
      }
    }
  }, [id, endVertex, startVertex,  graphRect, updateEdgePosition, updateConnectionWeight]);

  return (
    <div 
    start-vertex={startVertex} 
    end-vertex={endVertex} 
    data-edge-id={id} 
    className={styles.edge} 
    style={{ left: leftRef.current, top: topRef.current, width: weightRef.current, transform: `rotate(${angleRef.current}deg)` }}
    >
      {weightRef.current}
    </div>
  )
}

export default UiEdge