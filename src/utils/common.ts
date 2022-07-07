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
