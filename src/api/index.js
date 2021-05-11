import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: ' https://ea2df4abb1ec.ngrok.io/v1'
  })
}