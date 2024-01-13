export function getPascalsTriangleRow(rowIndex: number): number[] {
  if (rowIndex < 0) {
    return []
  }

  let result = [1]

  for (let i = 1; i <= rowIndex; i++) {
    const newRow: number[] = []
    newRow[0] = 1

    for (let j = 1; j < i; j++) {
      newRow[j] = result[j - 1] + result[j]
    }

    newRow[i] = 1
    console.log('IN: ', newRow)
    result = newRow
  }

  return result
}
