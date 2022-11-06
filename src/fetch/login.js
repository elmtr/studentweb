import axios from "axios"
import { push } from "svelte-spa-router";
import { config, tokenConfig, apiURL } from '../axiosConfig';
import {token, info, errorMessage, phoneNumber} from '../stores'
import {get} from 'svelte/store'

export async function login(phone, password) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/student/login`,
      {phone, password},
      config
    )

    push('/login/verify-code')
  } catch(error) {
    errorMessage.set(error.response.data.message)
  }
}

export async function loginVerifyCode(code) {
  try {
    let phone = get(phoneNumber)
    const {data} = await axios.post(
      `${apiURL}/v1/student/login/verify-code`,
      {phone, code},
      config
    )
    phoneNumber.set("")

    localStorage.setItem('info', JSON.stringify(data.student))
    info.set(data.student)

    push('/login/update')
  } catch(error) {
    errorMessage.set(error.response.data.message)
  }
}

export async function loginUpdate(phone, passcode) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/student/login/update`,
      {phone, passcode},
      tokenConfig(localStorage.getItem("token"))
    )

    localStorage.setItem("info", JSON.stringify(data.student))
    token.set(data.token)
    info.set(data.student)

    // keep it logged in
    localStorage.setItem("token", data.token)

    push('/')
  } catch(error) {
    errorMessage.set(error.response.data.message)
  }
}