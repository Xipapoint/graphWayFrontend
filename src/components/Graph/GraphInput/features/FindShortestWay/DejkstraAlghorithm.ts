/* eslint-disable no-loop-func */
import { getWeightByVertices } from "../../../../../shared/helpers/GetWeightByVertices";
import { PriorityQueue } from "./PriorityQueue";
import vertexStyles from '../../../GraphUi/Vertex/vertex.module.scss'
import edgeStyles from '../../../GraphUi/Edge/edge.module.scss'

let pairCopy: number[][] = [];
let shortestWay: number[][] = []



// O(V+E(LOGV)). Loops that do not belong to the algorithm are excluded

export function dejkstra(
    start: number, 
    end: number, 
    graphVertices: number[], 
    connections: { [key: number]: [number, number][] },
    debugMode: boolean
    ): void {
    if (Object.keys(connections).length === 0) {
        alert("No existing edges");
        return
    }
    pairCopy = []
    shortestWay = []
    for(let i = 0; i < graphVertices.length; i++){
        pairCopy.push([Number.MAX_VALUE, 0])
    }
    
    const pq: PriorityQueue = new PriorityQueue();

    const allEdges: HTMLCollectionOf<Element> = document.getElementsByClassName(edgeStyles.edge);
    let minWeightEdge: number = 0;

    console.log("activated dejkstra");
    const visited: boolean[] = [];

    for (let i = 0; i < graphVertices.length; i++) {
        visited[i] = false;
    }

    pairCopy[start][0] = 0;
    console.log("pairs: ", pairCopy);

    pq.enqueue(start, 0);
    let minWeightVertex: number = 0;

    let k: number = 0;

    while (!pq.isEmpty()) {
        k++;
        if (k > 100) {
            return;
        }
        // let currentVertex: number
        // let currentWeight: number

        let minWeight: number = Infinity;
        let [currentVertex, currentWeight] = pq.dequeue();
        console.log("current vertex: ", currentVertex);

        if (currentVertex === end) {
            k++;
            if (k > 150) {
                return;
            }
            console.log("creating shortest way");
            while (currentVertex !== start) {
                console.log("current vertex: ", currentVertex);
                shortestWay[0].push(currentVertex);
                console.log(`vertex in pair for ${currentVertex}: `, pairCopy[currentVertex][1]);
                currentVertex = pairCopy[currentVertex][1];
            }
            shortestWay[0].push(currentVertex);
            shortestWay.reverse();
            console.log(shortestWay);
            let currentEdge = allEdges[minWeightEdge] as HTMLElement
            currentEdge.style.backgroundColor = 'aqua'
            
            return
        }


        // TODO: СДЕЛАТЬ ДЕБАГ МОД
        let currentEdge = allEdges[minWeightEdge] as HTMLElement
        if (minWeightEdge >= 0 && minWeightEdge < allEdges.length) {
            currentEdge = allEdges[minWeightEdge] as HTMLElement;
            currentEdge.style.backgroundColor = 'red';
        } else {

        }

        if (currentWeight > pairCopy[currentVertex][0]) continue;



        if (!connections[currentVertex]) continue;
        for (let i = 0; i < connections[currentVertex].length; i++) {
            const neighbor = connections[currentVertex][i];
            const [neighborVertex, neighborWeight] = neighbor;
            
            const newWeight: number = currentWeight + getWeightByVertices(neighborVertex, currentVertex);
            if (newWeight < pairCopy[neighborVertex][0]) {
                pairCopy[neighborVertex][0] = newWeight;
                pairCopy[neighborVertex][1] = currentVertex;
                console.log(`vertex in graph pair for neighbor vertex ${neighborVertex} : v`, pairCopy[neighborVertex][1]);
                const vertice: HTMLElement | null = document.getElementById(neighborVertex.toString());
                if (vertice) {
                    const htmlPair: Element | null = vertice.querySelector(vertexStyles.pair);
                    if (htmlPair) {
                        htmlPair.textContent = `(${pairCopy[neighborVertex][0]}, v${pairCopy[neighborVertex][1]})`;
                    }
                }
                pq.enqueue(neighborVertex, newWeight);
                if (newWeight < minWeight) {
                    minWeight = newWeight;
                    minWeightVertex = neighborVertex;
                    for (let j = 0; j < allEdges.length; j++) {
                        if (allEdges[j].getAttribute('start-vertex') === currentVertex.toString() && allEdges[j].getAttribute('end-vertex') === minWeightVertex.toString()) {
                            let currentEdge = allEdges[minWeightEdge] as HTMLElement
                            currentEdge.style.backgroundColor = 'aqua'
                            minWeightEdge = j
                            console.log(minWeightEdge);
                            break
                        }
                    }
                }
            }
        }




    }
    return 
}



export function getCopyPair(){
    return pairCopy
}

export function getShortestWay(){
    return shortestWay
}