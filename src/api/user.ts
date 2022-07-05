import type { UserInfo } from '../mock/user.mock'
import service from '@/service'

export const login = () => {
  return service.post<UserInfo>('/login')
}
