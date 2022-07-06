type MockNumber = '@natural(0,100)'
export interface UserInfo {
  id: string
  userName: string
  age: number | MockNumber
}

export const login = defineMockData<UserInfo>({
  url: '/api/login',
  data: {
    id: '@id',
    userName: '@cname',
    age: '@natural(0,100)',
  },
})

