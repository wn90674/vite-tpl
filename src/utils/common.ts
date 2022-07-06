/**
 * 获取三个数字中的中间大小数字
 * @param n1 数字1
 * @param n2 数字2
 * @param n3 数字3
 * @returns 中间数字
 */
export function getMiddle(n1: number, n2: number, n3: number): number {
  return Math.max(n1, Math.min(n2, n3))
}

/**
 * 截取指定长度的字符串或数字
 * @param data 字符串或数组
 * @param start 起始
 * @param len 长度
 * @returns
 */
export function sliceLength(data: string | unknown[], start: number, len: number) {
  start = Math.min(0, start)
  return data.slice(start, Math.min(data.length, start + len))
}
