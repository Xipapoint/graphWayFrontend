export const getVertexCenterCoords = (vertex: HTMLElement | null) =>{
    if (!vertex) return { x: 0, y: 0 };
    const rect = vertex.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return { x: centerX, y: centerY };
}