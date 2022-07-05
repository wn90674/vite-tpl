import { defineStore } from 'pinia'
interface State {
  count: number
}
export const countStore = defineStore('countStore', {
  persist: true,
  state: (): State => ({
    count: 0,
  }),
  actions: {
    setNumber(n: number) {
      this.count = n
    },
    increase() {
      this.count = this.count + 1
    },
  },
})

export const a = 1
