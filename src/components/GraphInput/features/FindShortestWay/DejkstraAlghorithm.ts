/* eslint-disable no-loop-func */
import { getWeightByVertices } from "../../../../shared/helpers/GetWeightByVertices";
import { PriorityQueue } from "./PriorityQueue";

let pairCopy: number[][] = [];
let shortestWay: number[] = []

export function dejkstra(
    start: number, 
    end: number, 
    graphVertices: number[], 
    connections: { [key: number]: [number, number][] },
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
    // pairCopy = pair
    
    const pq: PriorityQueue = new PriorityQueue();

    // const allVertices: HTMLCollectionOf<Element> = document.getElementsByClassName("vertice");

    // for (let i = 0; i < allVertices.length; i++) {
    //     const pair: Element | null = allVertices[i].querySelector('.pair');
    //     if (pair) {
    //         pair.textContent = `(${Infinity}, ${0})`;
    //     }
    // }

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
                shortestWay.push(currentVertex);
                console.log(`vertex in pair for ${currentVertex}: `, pairCopy[currentVertex][1]);
                currentVertex = pairCopy[currentVertex][1];
            }
            shortestWay.push(currentVertex);
            shortestWay.reverse();
            console.log(shortestWay);
            
            return
        }

        if (currentWeight > pairCopy[currentVertex][0]) continue;

        if (!connections[currentVertex]) continue;

        connections[currentVertex].forEach(neighbor => {
            const [neighborVertex, neighborWeight] = neighbor;

            const newWeight: number = currentWeight + getWeightByVertices(neighborVertex, currentVertex);
            if (newWeight < pairCopy[neighborVertex][0]) {
                pairCopy[neighborVertex][0] = newWeight;
                pairCopy[neighborVertex][1] = currentVertex;
                console.log(`vertex in graph pair for neighbor vertex ${neighborVertex} : v`, pairCopy[neighborVertex][1]);
                const vertice: HTMLElement | null = document.getElementById(neighborVertex.toString());
                if (vertice) {
                    const htmlPair: Element | null = vertice.querySelector('.pair');
                    if (htmlPair) {
                        htmlPair.textContent = `(${pairCopy[neighborVertex][0]}, v${pairCopy[neighborVertex][1]})`;
                    }
                }
                pq.enqueue(neighborVertex, newWeight);
                if (newWeight < minWeight) {
                    minWeight = newWeight;
                    minWeightVertex = neighborVertex;
                }
            }
        });
    }
    return 
}



export function getCopyPair(){
    return pairCopy
}

export function getShortestWay(){
    return shortestWay
}