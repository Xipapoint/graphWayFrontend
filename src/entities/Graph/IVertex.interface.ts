import { IVertexCoordinates } from "./IVertexCoordinates.interface"

export interface IVertex{
    id: number
    xPos: number,
    yPos: number
    pair: number[]
    isShortest: boolean
}