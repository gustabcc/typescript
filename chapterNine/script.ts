function arredonda(value: string): string;
function arredonda(value: number): number;
function arredonda(value: string | number): string | number {
  if(typeof value === "number") {
    return Math.ceil(value);
  } else {
    return Math.ceil(Number(value)).toString()
  }
}

console.log(arredonda(200.4679));
console.log(arredonda("45.3289"));