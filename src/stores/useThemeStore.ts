export const useThemeStore = defineStore('theme', {
  state: () => ({
    count: 0,

    rate: 0
  }),
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
