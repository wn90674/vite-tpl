type MockNumber = '@number'
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
    age: 40,
  },
})

