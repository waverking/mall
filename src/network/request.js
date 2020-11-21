import axios from "axios"
export default function request(config) {
  const network = axios.create({
    baseURL:"使用第三方接口",
    timeout:5000
  })
  network.interceptors.request.use(
    config => {
      return config
    },
    err => {
      console.log(err);
    }
  )
  network.interceptors.response.use(
    config => {
      return config
    },
    err => {
      console.log(err);
    }
  )
  return network(config)
}