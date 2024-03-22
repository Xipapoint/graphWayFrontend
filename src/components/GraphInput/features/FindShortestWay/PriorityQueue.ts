export class PriorityQueue {
    heap: [number, number][];

    constructor() {
        this.heap = [];
    }

    enqueue(element: number, priority: number): void {
        this.heap.push([element, priority]);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index: number): void {
        let currentIndex = index;
        const heap = this.heap;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (heap[currentIndex][1] >= heap[parentIndex][1]) break;
            [heap[currentIndex], heap[parentIndex]] = [heap[parentIndex], heap[currentIndex]];
            currentIndex = parentIndex;
        }
    }

    dequeue(): [number, number]{
        if (this.heap.length === 0) { 
            console.log("heap is empty");
            return [-1, -1]
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop()!; // put last to first
        this.bubbleDown(0);
        return min;
    }

    bubbleDown(pos: number): void {
        const heap = this.heap;
        // const currentItem = heap[pos];
        let currentIndex = pos;
    
        while (true) {
            let left = 2 * currentIndex + 1;
            let right = 2 * currentIndex + 2;
            let smallestIndex = currentIndex;
    
            if (left < heap.length && heap[left][1] < heap[smallestIndex][1]) {
                smallestIndex = left;
            }
    
            if (right < heap.length && heap[right][1] < heap[smallestIndex][1]) {
                smallestIndex = right;
            }
    
            if (smallestIndex !== currentIndex) {
                [heap[currentIndex], heap[smallestIndex]] = [heap[smallestIndex], heap[currentIndex]];
                currentIndex = smallestIndex;
            } else {
                break;
            }
        }
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }
}
