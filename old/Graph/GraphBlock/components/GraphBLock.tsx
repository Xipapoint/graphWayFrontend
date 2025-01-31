import { GraphDTO } from '../../../../entities/Graph/DTO/GraphDTO.dto';
import { IEdge } from '../../../../entities/Graph/IEdge.interface';
import { IEdgeDetails } from '../../../../entities/Graph/IEdgeDetails.interface';
import { IVertex } from '../../../../entities/Graph/IVertex.interface';
import { IVertexCoordinates } from '../../../../entities/Graph/IVertexCoordinates.interface';
import UiVertex from '../../../src/shared/ui/Vertex';
import UiEdge from '../../GraphUi/Edge/UiEdge';
import styles from './graphBlock.module.scss';

interface GraphBlockProps {
  editMode: boolean;
  graphDto: GraphDTO;
  verticesFunctions: {
    handleDeleteVertex: (vertices: IVertex[], index: number) => void;
    handleUpdateVertexPosition: (
      vertices: IVertex[],
      vertexCoordinate: IVertexCoordinates,
    ) => void;
  };
  edgesFunctions: {
    handleDeleteEdge: (edges: IEdge[], index: number) => void;
    handleUpdateEdgePosition: (
      edges: IEdge[],
      edgeDetails: IEdgeDetails,
    ) => void;
    handleDeleteEdgesByVertex: (edges: IEdge[], index: number) => void;
    handleUpdateConnectionWeight: (
      connections: Map<number, [number, number][]>,
      connection: [number, number, number],
    ) => void;
    handleDeleteConnectionsByVertex: (
      connections: Map<number, [number, number][]>,
      index: number,
    ) => void;
  };
}

const GraphBLock: React.FC<GraphBlockProps> = ({
  editMode,
  graphDto,
  verticesFunctions,
  edgesFunctions,
}) => {
  const handleVertexPositionUpdate = (
    id: number,
    xPos: number,
    yPos: number,
  ) => {
    verticesFunctions.handleUpdateVertexPosition(graphDto.DTOvertices, {
      id,
      xPos,
      yPos,
    });
  };

  const handleEdgePositionUpdate = (
    id: number,
    weight: number,
    left: number,
    top: number,
    angle: number,
  ) => {
    edgesFunctions.handleUpdateEdgePosition(graphDto.DTOedges, {
      id,
      weight,
      left,
      top,
      angle,
    });
  };

  const handleConnectionWeightUpdate = (
    startVertex: number,
    endVertex: number,
    weight: number,
  ) => {
    edgesFunctions.handleUpdateConnectionWeight(graphDto.DTOconnections, [
      startVertex,
      endVertex,
      weight,
    ]);
  };

  const handleDeleteVertex = (id: number) => {
    edgesFunctions.handleDeleteConnectionsByVertex(graphDto.DTOconnections, id);
    verticesFunctions.handleDeleteVertex(graphDto.DTOvertices, id);
    edgesFunctions.handleDeleteEdgesByVertex(graphDto.DTOedges, id);
  };

  //To get the current width for block and put in GRAPGHSIZES. Height gets the same just change to 'clientHeight'

  // const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  // const pxWidth = (70.8 / 100) * viewportWidth;
  // console.log(pxWidth);

  return (
    <div className={styles.graph_block} id="graph">
      {graphDto.DTOvertices.map((vertex) => (
        <UiVertex
          isShortestVertex={vertex.isShortest}
          draggable={true}
          key={vertex.id}
          id={vertex.id}
          xPos={vertex.xPos}
          yPos={vertex.yPos}
          pair={vertex.pair}
          updateVertexPosition={handleVertexPositionUpdate}
          handleDeleteVertex={handleDeleteVertex}
          editMode={editMode}
        />
      ))}

      {graphDto.DTOedges.map((edge) => (
        <UiEdge
          key={edge.id}
          id={edge.id}
          left={edge.left}
          top={edge.top}
          angle={edge.angle}
          weight={edge.weight}
          vertices={graphDto.DTOvertices}
          startVertex={edge.startVertex}
          endVertex={edge.endVertex}
          updateEdgePosition={handleEdgePositionUpdate}
          updateConnectionWeight={handleConnectionWeightUpdate}
        />
      ))}
    </div>
  );
};

export default GraphBLock;
