export function addConnection(localstate: { [key: number]: [number, number][] }, connection: [number, number, number]): { [key: number]: [number, number][] } | number {
    const [vertex1, vertex2, weight] = connection

    const connectionsForVertex1 = localstate[vertex1] || [];

    const connectionExists = connectionsForVertex1.some(([connectedVertex]) => connectedVertex === vertex2);

    if (connectionExists) {
        return -1
    }

    const newState = { ...localstate };

    newState[vertex1] = [...connectionsForVertex1, [vertex2, weight]];
    const connectionsForVertex2 = newState[vertex2] || [];
    newState[vertex2] = [...connectionsForVertex2, [vertex1, weight]];

    return newState
}

export function updateConnectionWeight(localstate: { [key: number]: [number, number][] }, connection: [number, number, number]): { [key: number]: [number, number][] }{
    const [vertex1, vertex2, weight] = connection;
  
    const newConnections = { ...localstate };

    newConnections[vertex1] = (newConnections[vertex1] || []).map(([v, w]) => {
      if (v === vertex2) {
        return [v, weight];
      }
      return [v, w];
    });
    newConnections[vertex2] = (newConnections[vertex2] || []).map(([v, w]) => {
      if (v === vertex1) {
        return [v, weight];
      }
      return [v, w];
    });
  
    return newConnections
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

export function deleteConnectionsByVertex(localstate: {[key: number]: [number, number][]}, index: number): { [key: number]: [number, number][] }{
    const vertexId = index
    const newConnections = {...localstate};
    Object.keys(newConnections).forEach(vertex => {
      const vertexNumber: number = parseInt(vertex);
      newConnections[vertexNumber] = newConnections[vertexNumber].filter(([v, _]) => v !== vertexId);
    });

    delete newConnections[vertexId]

    return newConnections
}