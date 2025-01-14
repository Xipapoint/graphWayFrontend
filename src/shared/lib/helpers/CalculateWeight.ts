import { Coordinates } from "./interfaces/ICoordinates.interface";

export const calculateWeight = <V1 extends Coordinates, V2 extends Coordinates>(
    { x: x1, y: y1 }: V1,
    { x: x2, y: y2 }: V2
 ): number => {
    const Weight = Math.abs(Math.floor(Math.sqrt((Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)))));
    return Weight;
}