var basicDenomination = [100, 50, 20, 10, 5, 1];
var rpDenomination = [50, 27, 1];
var basicDenominationWithDuplicates = [10, 100, 50, 50, 20, 10, 5, 1];
var impossibleDenomination = [100, 50, 20, 10, 5];

function shuffle(arr) {
  return arr.sort(function(a, b) {
    return (Math.random() < 0.5);
  })
} 

QUnit.test( "Basic example", function( assert ) {
  assert.equal(MakeChange(135, basicDenomination), 4);
});

QUnit.test( "Basic example with random denomination order", function( assert ) {
  assert.equal(MakeChange(135, shuffle(basicDenomination)), 4);
});

QUnit.test( "Example with negative amount returns an error", function( assert ) {
  assert.equal(MakeChange(-135, basicDenomination), false);
});

QUnit.test( "Example with string, instead of an array for denominations, returns an error", 
  function( assert ) {
  assert.equal(MakeChange(135, 'error'), false);
});

QUnit.test( "Example with duplicates in denominations array", 
  function( assert ) {
  assert.equal(MakeChange(135, basicDenominationWithDuplicates), 4);
});

QUnit.test( "Basic example with relatively prime denominations", function( assert ) {
  assert.equal(MakeChange(54, rpDenomination), 2);
});

QUnit.test( "Example where it is not possible to give the change", function( assert ) {
  assert.equal(MakeChange(134, impossibleDenomination), false);
});

