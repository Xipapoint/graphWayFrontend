type CurrentVertexId = number
type Weight = number
type FromVertexId = number
export interface Pair {
    pair: Record<CurrentVertexId, [Weight, FromVertexId]>,
}