export function fibonacci(n: number): number[] {
  if (n == 0) {
    return []
  }
  if (n == 1) {
    return [0]
  }
  const fibonaci: number[] = [0, 1]

  for (let i = 2; i < n; i++) {
    fibonaci.push(fibonaci[i - 2] + fibonaci[i - 1])
  }
  return fibonaci
}

console.log(fibonacci(1))
