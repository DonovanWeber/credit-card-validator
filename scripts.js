function luhnAlgorithm(cardNumbers) {
  let step1Array = cardNumbers.split("").map((x) => parseInt(x));
  const newArray = [];

  for (let i = 0; i < step1Array.length; i++) {
    if (i % 2 === 1) {
      const doubledVal = step1Array[i] * 2;
      const lastArray = doubledVal.toString().split("");
      const pleaseArray = lastArray.map((x) => parseInt(x));
      const anotherARray = pleaseArray.reduce((total, a) => total + a, 0);
      newArray.push(anotherARray);
    } else {
      newArray.push(step1Array[i]);
    }
  }
  result = newArray.reduce((total, a) => total + a, 0);
  const newResult = result.toString().split("");
  if (newResult.includes("0")) {
    return "valid";
  } else {
    return "not valid";
  }
}

luhnAlgorithm("0998445533334452");
