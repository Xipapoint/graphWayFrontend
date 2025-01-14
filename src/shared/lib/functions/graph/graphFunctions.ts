export function addConnection(
  localstate: Map<number, [number, number][]>,
  connection: [number, number, number]
): Map<number, [number, number][]> | number {
  const [vertex1, vertex2, weight] = connection

  const connectionsForVertex1 = localstate.get(vertex1) || [];

  const connectionExists = connectionsForVertex1.some(([connectedVertex]) => connectedVertex === vertex2);

  if (connectionExists) {
    return -1
  }

  const newState = new Map(localstate);

  newState.set(vertex1, [...connectionsForVertex1, [vertex2, weight]]);
  const connectionsForVertex2 = newState.get(vertex2) || [];
  newState.set(vertex2, [...connectionsForVertex2, [vertex1, weight]]);

  return newState;
}

export function updateConnectionWeight(
  localstate: Map<number, [number, number][]>,
  connection: [number, number, number]
): Map<number, [number, number][]> {
  const [vertex1, vertex2, weight] = connection;

  const newConnections = new Map(localstate);
  
  if (newConnections.has(vertex1)) {
      newConnections.set(
          vertex1,
          newConnections.get(vertex1)!.map(([v, w]) => {
              if (v === vertex2) {
                  return [v, weight];
              }
              return [v, w];
          })
      );
  }

  if (newConnections.has(vertex2)) {
      newConnections.set(
          vertex2,
          newConnections.get(vertex2)!.map(([v, w]) => {
              if (v === vertex1) {
                  return [v, weight];
              }
              return [v, w];
          })
      );
  }

  return newConnections;
}


// export function deleteGraphVertex(graphVertices: number[], shortestVertices: number[][], pair: number[][], index: number): 
//     {
//     graphVertices: number[],
//     shortestVertices: number[][],
//     pair: number[][]
//     }{
//     const indexToRemove = graphVertices.findIndex(vertex => vertex === index);

//     if (indexToRemove !== -1) {
//       const updatedPair = pair.filter(pair => pair[indexToRemove] !== indexToRemove);
//       if(shortestVertices.length > 0){
//         return {
//             graphVertices: [...graphVertices.slice(indexToRemove, 1)],
//             shortestVertices: [...shortestVertices.slice(indexToRemove, 1)],
//             pair: updatedPair
//           };
//       }

//     }

//     return {graphVertices, shortestVertices, pair};
// }

export function deleteConnectionsByVertex(
  localstate: Map<number, [number, number][]>, 
  index: number
): Map<number, [number, number][]> {
  const vertexId = index
  const newConnections = new Map(localstate);
  newConnections.forEach(connections => {
    connections.filter((connection) => connection[0] !== vertexId)
  })

  newConnections.delete(vertexId)

  return newConnections
}