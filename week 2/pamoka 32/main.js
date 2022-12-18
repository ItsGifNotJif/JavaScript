


console.group('Array.prototype.map implementation example');
{
  function double(number) {
    return number * 2;
  }
  const doubleNumbers2 = fakeArray.map(double);
  console.log(doubleNumbers2);
}
console.groupEnd();

