export const generateCoord = (graphBlockOffset: number): number =>{
    return Math.floor(Math.random() * (graphBlockOffset - 30));
}