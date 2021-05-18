import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://13.231.22.26/v1'
  })
}