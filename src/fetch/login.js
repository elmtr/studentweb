import axios from "axios"
import { push } from "svelte-spa-router";
import { config, tokenConfig, apiURL } from '../axiosConfig';
import {token, info} from '../stores'

export async function login(phone, password) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/student/login`,
      {phone, password},
      config
    )
    localStorage.setItem('phone', phone)
    push('/login/verify-code')
  } catch(error) {
    console.log(error.response.data.message)
  }
}

export async function loginVerifyCode(code) {
  try {
    let phone = localStorage.getItem('phone')
    const {data} = await axios.post(
      `${apiURL}/v1/student/login/verify-code`,
      {phone, code},
      config
    )
    localStorage.setItem('userInfo', JSON.stringify(data.student))
    push('/login/update')
  } catch(error) {
    console.log(error.response.data.message)
  }
}

export async function loginUpdate(phone, passcode) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/student/login/update`,
      {phone, passcode},
      tokenConfig(localStorage.getItem("userToken"))
    )
    localStorage.setItem("userInfo", JSON.stringify(data.student))
    token.set(data.token)
    info.set(data.student)

    // keep it logged in
    localStorage.setItem("token", data.token)

    push('/')
  } catch(error) {
    console.log(error.response.data.message)
  }
}