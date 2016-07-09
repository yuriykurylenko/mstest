function validateInput(N, denominations) {
  if (!Number.isInteger(N) || N < 0) {
    console.error('Amount is not a positive integer.');
    return false;
  }

  if (!Array.isArray(denominations)) {
    console.error('Given denominations is not an array.');
    return false;
  }

  for (var i = 0; i < denominations.length; i++) {
    if (!Number.isInteger(denominations[i]) || 
        denominations[i] < 0) {
      console.error('Given denominations is not an array of positive integers.');
      return false;    
    }
  }

  return true;
}

function MakeChange(N, denominations) {
  var rest = N,
      result = N,
      tempResult = 0,
      exists = false;
  
  if (!validateInput(N, denominations)) {
    return false;
  }

  denominations = denominations.sort(function(a,b) { 
    return b - a;
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
  });

  for (var i = 0; i < denominations.length; i++) {
    tempResult = 0;
    rest = N;

    for (var j = i; j < denominations.length; j++) {      
      tempResult += (parseInt(rest / denominations[j]));
      rest = rest % denominations[j];
    }

    if ((tempResult < result) && (rest == 0)) {
      result = tempResult;
      exists = true;
    }
  }

  return !exists ? false : result;
}
