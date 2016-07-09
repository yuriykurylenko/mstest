function TinyHeap(N) {
  this.heap = null;
  
  this.allocateTinyHeap = function(N) {
    if (!Number.isInteger(N) || N < 0) {
      console.error('Heap length is not a positive integer.');
      this.heap = null;
    } else {
      this.heap = Array(N).fill(0);
    }
  }
  
  this.deleteTinyHeap = function() {
    this.heap = null;
  }
  
  this.tinyAlloc = function(bytes) {
    var availableCount = 0;
    var i = 0;
    
    while (i < this.heap.length && availableCount < bytes) {
      if (this.heap[i] == 0) {
        availableCount++;
      } else if (this.heap[i] == 1) {
        availableCount = 0;
      }
      
      if (availableCount == bytes) {
        // Replacing part of the array, staring from index (i - bytes + 1) with array of 1's of length (bytes).
        Array.prototype.splice.apply(this.heap, [i - bytes + 1, bytes].concat(Array(bytes).fill(1)));
      }
            
      i++;
    }
    
    if (availableCount < bytes) {
      console.error('Unable to allocate memory.')
    }
  }
  
  this.tinyFree = function(position) {
    this.heap[position] = 0;
  }
  
  this.allocateTinyHeap(N);
}
