import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://3.112.29.58/v1'
  })
}