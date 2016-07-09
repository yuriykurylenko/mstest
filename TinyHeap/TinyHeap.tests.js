QUnit.test( "Heap is initialized correctly", function( assert ) {
  h = new TinyHeap(8);
  assert.deepEqual(h.heap, [0,0,0,0,0,0,0,0]);
});

QUnit.test( "Allocating memory inside an empty heap", function( assert ) {
  h = new TinyHeap(8);
  h.tinyAlloc(3);
  assert.deepEqual(h.heap, [1,1,1,0,0,0,0,0]);
});

QUnit.test( "Freing a byte inside a heap", function( assert ) {
  h = new TinyHeap(8);
  h.tinyAlloc(3);
  h.tinyFree(1);

  assert.deepEqual(h.heap, [1,0,1,0,0,0,0,0]);
});

QUnit.test( "Allocating memory inside a non-empty heap", function( assert ) {
  h = new TinyHeap(8);
  h.tinyAlloc(3);
  h.tinyFree(1);
  h.tinyAlloc(2);

  assert.deepEqual(h.heap, [1,0,1,1,1,0,0,0]);
});

QUnit.test( "When memory can not be allocated, the heap is not changed", function( assert ) {
  h = new TinyHeap(8);
  h.tinyAlloc(5);
  h.tinyFree(1);
  h.tinyAlloc(4);

  assert.deepEqual(h.heap, [1,0,1,1,1,0,0,0]);
});

QUnit.test( "Deleting a heap", function( assert ) {
  h = new TinyHeap(8);
  h.deleteTinyHeap();

  assert.equal(h.heap, null);
});

QUnit.test( "Wrong initialization of the heap returns an error", function( assert ) {
  h = new TinyHeap([8]);
  assert.equal(h.heap, null);
});
