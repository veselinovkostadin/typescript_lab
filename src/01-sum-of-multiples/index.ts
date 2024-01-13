export function sumOfMultiples(multiple: number, max: number): number {
  if (multiple > max) {
    return 0
  }
  let sum: number = 0
  const temp: number = multiple
  while (multiple <= max) {
    console.log(multiple)
    sum += multiple
    multiple += temp
  }

  return sum
}
