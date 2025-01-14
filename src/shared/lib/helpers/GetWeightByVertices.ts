import { calculateWeight } from "./CalculateWeight";
import { getVertexCenterCoords } from "./GetVertexCenterCoords";

export function getWeightByVertices(firstIndex: number, secondIndex: number){
    const index1: number = firstIndex;
    const index2: number = secondIndex;
    const vertex1: HTMLElement | null = document.querySelector('[data-vertex-id="' + index1 + '"]');
    const vertex2: HTMLElement | null = document.querySelector('[data-vertex-id="' + index2 + '"]');

    if (!vertex1 || !vertex2) {
        throw new Error('One or both vertices not found.');
    }

    const centerVertex1 = getVertexCenterCoords(vertex1);
    const centerVertex2 = getVertexCenterCoords(vertex2);

    return calculateWeight(centerVertex1, centerVertex2);

}