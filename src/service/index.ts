import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
})

instance.interceptors.response.use((res) => {
  if (res.status === 200)
    return res.data
})

export default instance
