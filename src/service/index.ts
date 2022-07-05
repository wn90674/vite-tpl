import type { AxiosError } from 'axios'
import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.PROD ? import.meta.env.BASE_URL : '/api',
  timeout: 10000,
})

instance.interceptors.response.use((res) => {
  if (res.status === 200)
    return res.data
}, (err: AxiosError) => {
  if (err.code === 'ECONNABORTED' && import.meta.env.DEV)
    console.error('请检查mock server 是否正常: pnpm run mock')
})

export default instance
