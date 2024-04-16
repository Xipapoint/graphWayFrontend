import { IVertexCoordinates } from "./IVertexCoordinates.interface"

export interface IVertex{
    id: number
    xPos: number,
    yPos: number
    //PAIR: [ID, WEIGHT, FROM_ID], example: [5, 159, 9] WHERE 9 IS VERTEX FROM WHICH GOES SHORTEST EDGE TO CURRENT VERTEX
    pair: number[]
    isShortest: boolean
}