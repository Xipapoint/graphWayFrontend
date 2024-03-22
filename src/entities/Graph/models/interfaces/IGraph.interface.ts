export interface IGraph {
    vertices: number[];
    pair: [number, number][];
    connections: { [key: number]: [number, number][] };
}