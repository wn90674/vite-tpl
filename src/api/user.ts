import service from '@/service'

export const userInfo = () => {
  return service.post<{ a: 1 }>('/aaa')
}
