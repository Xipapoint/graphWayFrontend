// import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// interface PQState {
//     heap: [number, number][];
//     isLoading: boolean;
//     error: string;
// }

// const initialState: PQState = {
//     heap: [],
//     isLoading: false,
//     error: ''
// };

// // const PQSlice = createSlice({
// //     name: "pq",
// //     initialState,
// //     reducers: {
// //         enqueue(state, action: PayloadAction<[number, number]>){
// //             const [element, priority] = action.payload;
// //             state.heap.push([element, priority]);
// //             bubbleUp(state.heap, state.heap.length - 1);
// //         },
// //         dequeue(state) {
// //             if (state.heap.length === 0) {
// //                 console.log("heap is empty");
// //                 return null;
// //             }
// //             const min = state.heap[0];
// //             state.heap[0] = state.heap.pop()!;
// //             bubbleDown(state.heap, 0);
// //             return min;
// //         }
// //     }
// // });

// export const { enqueue, dequeue } = PQSlice.actions;

// export default PQSlice.reducer;

// function bubbleUp(heap: [number, number][], index: number): void {
//     let currentIndex = index;
//     while (currentIndex > 0) {
//         const parentIndex = Math.floor((currentIndex - 1) / 2);
//         if (heap[currentIndex][1] >= heap[parentIndex][1]) break;
//         [heap[currentIndex], heap[parentIndex]] = [heap[parentIndex], heap[currentIndex]];
//         currentIndex = parentIndex;
//     }
// }

// function bubbleDown(heap: [number, number][], pos: number): void {
//     let currentIndex = pos;
//     while (true) {
//         let left = 2 * currentIndex + 1;
//         let right = 2 * currentIndex + 2;
//         let smallestIndex = currentIndex;
//         if (left < heap.length && heap[left][1] < heap[smallestIndex][1]) {
//             smallestIndex = left;
//         }
//         if (right < heap.length && heap[right][1] < heap[smallestIndex][1]) {
//             smallestIndex = right;
//         }
//         if (smallestIndex !== currentIndex) {
//             [heap[currentIndex], heap[smallestIndex]] = [heap[smallestIndex], heap[currentIndex]];
//             currentIndex = smallestIndex;
//         } else {
//             break;
//         }
//     }
// }
export const ghghg: string = ''
