export const generateCoord = (graphBlockOffset: number): number =>{
    return Math.floor(Math.random() * (graphBlockOffset - 30));
}


export const treeGenerateCoord = (graphBlockOffset: number): number =>{
    return Math.floor(graphBlockOffset / 2);
}