import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://3.112.29.58:3000/v1'
  })
}