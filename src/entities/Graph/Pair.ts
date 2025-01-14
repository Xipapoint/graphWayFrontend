type CurrentVertexId = number;
type Weight = number;
type FromVertexId = number;

// @param
export interface Pair {
  pair: Record<CurrentVertexId, [Weight, FromVertexId]>;
}
