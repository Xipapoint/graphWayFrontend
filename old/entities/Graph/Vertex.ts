import { Pair } from "./Pair"
export interface Vertex{
    id: number
    xPos: number,
    yPos: number
    pair: Pair
    isShortest: boolean
}