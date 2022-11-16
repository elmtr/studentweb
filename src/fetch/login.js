import axios from "axios"
import { push } from "svelte-spa-router";
import { config, tokenConfig, apiURL } from '../axiosConfig';
import {token, info, errorMessage, phoneNumber, loading, showUpdate, now, loginTime} from '../stores'
import {get} from 'svelte/store'

export async function login(phone, password) {
  try {
    loading.set(true)
    const {data} = await axios.post(
      `${apiURL}/v1/student/login`,
      {phone, password},
      config
    )
    loading.set(false)

    push('/login/verify-code')
  } catch(error) {
    errorMessage.set(error.response.data.message)
    loading.set(false)
  }
}

export async function loginVerifyCode(code) {
  try {
    let phone = get(phoneNumber)
    loading.set(true)
    const {data} = await axios.post(
      `${apiURL}/v1/student/login/verify-code`,
      {phone, code},
      config
    )
    loading.set(false)
    phoneNumber.set("")

    localStorage.setItem('info', JSON.stringify(data.student))
    info.set(data.student)

    push('/')
  } catch(error) {
    errorMessage.set(error.response.data.message)
    loading.set(false)
  }
}

export async function loginUpdate(phone, passcode) {
  try {
    loading.set(true)
    const {data} = await axios.post(
      `${apiURL}/v1/student/login/update`,
      {phone, passcode},
      tokenConfig(localStorage.getItem("token"))
    )
    loading.set(false)
    showUpdate.set(false)

    let d = new Date()
    loginTime.set(d.getHours() + d.getMinutes() / 100)

    localStorage.setItem("info", JSON.stringify(data.student))
    token.set(data.token)
    info.set(data.student)

    // keep it logged in
    // localStorage.setItem("token", data.token)

  } catch(error) {
    errorMessage.set(error.response.data.message)
    loading.set(false)
  }
}