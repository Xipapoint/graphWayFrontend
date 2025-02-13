/* eslint-disable no-loop-func */
import { getWeightByVertices } from "../../../../../shared/helpers/GetWeightByVertices";
import { PriorityQueue } from "./PriorityQueue";
import vertexStyles from '../../../GraphUi/Vertex/vertex.module.scss'
import edgeStyles from '../../../GraphUi/Edge/edge.module.scss'

let pairCopy: number[][] = [];
let shortestWay: number[][] = []


// TODO: PAIR: [ID, W, FROM_ID]


// O(V+E(LOGV)). Loops that do not belong to the algorithm are excluded

export function dejkstra(
    start: number, 
    end: number, 
    graphVertices: number[], 
    connections: Map<number, [number, number][]>,
    ): number {
    if (connections.size === 0) {
        alert("No existing edges");
        return -1
    }
    if(!graphVertices.includes(start) || !graphVertices.includes(end)){
        alert("Start or end vertex doesnt exist");
        return -1
    }
    pairCopy = []
    shortestWay = []
    console.log("graph vertices:", graphVertices);
    for(let i = 0; i < graphVertices.length; i++){
        pairCopy[i] = []
        if(graphVertices[i] === start) {
            pairCopy[i] = [graphVertices[i], 0, 0]
            continue
        }
        pairCopy[i] = [graphVertices[i], Number.MAX_VALUE, 0]
    }
    const pq: PriorityQueue = new PriorityQueue();

    const allEdges: HTMLCollectionOf<Element> = document.getElementsByClassName(edgeStyles.edge);
    let minWeightEdge: number = 0;

    console.log("activated dejkstra");
    const visited: boolean[] = [];

    for (let i = 0; i < graphVertices.length; i++) {
        visited[i] = false;
    }
    console.log(pairCopy);
    
    console.log("pairs: ", pairCopy);

    pq.enqueue(start, 0);
    let minWeightVertex: number = 0;

    let k: number = 0;

    let index: number = 0;

    while (!pq.isEmpty()) {
        k++;
        if (k > 100) {
            return -1;
        }
        // let currentVertex: number
        // let currentWeight: number

        let minWeight: number = Infinity;
        let [currentVertex, currentWeight] = pq.dequeue();
        console.log("current vertex: ", currentVertex);

        if (currentVertex === end) {
            k++;
            if (k > 150) {
                return -1;
            }
            shortestWay[0] = []
            console.log("creating shortest way");
            while (currentVertex !== start) {
                index = 0
                console.log("current vertex: ", currentVertex);
                console.log(shortestWay);
                
                shortestWay[0].push(currentVertex);
                while(pairCopy[index][0] !== currentVertex){
                    index++
                }
                console.log(`vertex in pair for ${currentVertex}: `, pairCopy[index][2]);
                currentVertex = pairCopy[currentVertex][2];

            }
            shortestWay[0].push(currentVertex);
            shortestWay[0].reverse();
            console.log(shortestWay);
            const currentEdge = allEdges[minWeightEdge] as HTMLElement
            currentEdge.style.backgroundColor = 'aqua'
            
            return 0
        }
        if (!connections.get(currentVertex)) continue;


        // let currentEdge = allEdges[minWeightEdge] as HTMLElement
        // if (minWeightEdge >= 0 && minWeightEdge < allEdges.length) {
        //     currentEdge = allEdges[minWeightEdge] as HTMLElement;
        //     currentEdge.style.backgroundColor = 'red';
        // }

        index = 0
        while(pairCopy[index][0] !== currentVertex){
            index++
        }

        if (currentWeight > pairCopy[index][1]) continue; 

        for (let i = 0; i < connections.get(currentVertex)!.length; i++) {
            index = 0;
            const neighbor = connections.get(currentVertex)![i];
            const [neighborVertex, ] = neighbor;
            
            const newWeight: number = currentWeight + getWeightByVertices(neighborVertex, currentVertex);

            while(pairCopy[index][0] !== neighborVertex){
                console.log("index:", index);
                
                index++
            }

            if (newWeight < pairCopy[index][1]) {
                pairCopy[index][1] = newWeight;
                pairCopy[index][2] = currentVertex;
                console.log(`vertex in graph pair for neighbor vertex ${neighborVertex} : v`, pairCopy[neighborVertex][1]);
                const vertice: HTMLElement | null = document.getElementById(neighborVertex.toString());
                if (vertice) {
                    const htmlPair: Element | null = vertice.querySelector(vertexStyles.pair);
                    if (htmlPair) {
                        htmlPair.textContent = `(${pairCopy[index][1]}, v${pairCopy[index][2]})`;
                    }
                }
                pq.enqueue(neighborVertex, newWeight);
                if (newWeight < minWeight) {
                    minWeight = newWeight;
                    minWeightVertex = neighborVertex;
                    for (let j = 0; j < allEdges.length; j++) {
                        if (allEdges[j].getAttribute('start-vertex') === currentVertex.toString() && allEdges[j].getAttribute('end-vertex') === minWeightVertex.toString()) {
                            const currentEdge = allEdges[minWeightEdge] as HTMLElement
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
    return -1
}



export function getCopyPair(){
    return pairCopy
}

export function getShortestWay(){
    return shortestWay
}