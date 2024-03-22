import { Coordinates } from "./interfaces/ICoordinates.interface";

export const calculateAngle = <V1 extends Coordinates, V2 extends Coordinates>(
    { x: x1, y: y1 }: V1,
    { x: x2, y: y2 }: V2
 ): number => {
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    return angle
}