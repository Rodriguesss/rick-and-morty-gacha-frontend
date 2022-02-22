import axios from 'axios'

const API_URL = 'https://rick-and-morty-gacha.herokuapp.com'

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } }
}

async function login(body) {
  const loginPromise = await axios.post(`${API_URL}/login`, body)

  return loginPromise
}

async function register(body) {
  const registerPromise = await axios.post(`${API_URL}/register`, body)

  return registerPromise
}

async function getHome(token) {
  const config = createConfig(token)
  const promise = await axios.get(`${API_URL}/`, config)

  return promise
}

const services = {
  login,
  register,
  getHome
}

export default services
