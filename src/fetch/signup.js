import axios from "axios"
import { push } from "svelte-spa-router";
import { tokenConfig, config, apiURL } from '../axiosConfig';
import {errorMessage, token} from '../stores'

export async function signupBasic(lastName, firstName, phone) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/basic`,
      {lastName, firstName, phone},
      config
    )
    localStorage.setItem('info', JSON.stringify(data.student))
    localStorage.setItem('token', data.token)

    push('/signup/verify-code')
  } catch(error) {
    errorMessage.set(error.response.data.message)
  }
}

export async function signupVerifyCode(phone, code) {
  try {
    let phone = localStorage.getItem("phone")
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/verify-code`,
      {phone, code},
      tokenConfig(localStorage.getItem('token'))
    )
    localStorage.setItem('info', JSON.stringify(data.student))
    localStorage.setItem('token', data.token)

    push('/signup/grade')
  } catch(error) {
    errorMessage.set(error.response.data.message)
  }
}

export async function signupGrade(gradeNumber, gradeLetter) {
  try {
    let phone = localStorage.getItem("phone")
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/grade`,
      {gradeNumber, gradeLetter},
      tokenConfig(localStorage.getItem('token'))
    )
    localStorage.setItem('token', data.token)
    localStorage.setItem('info', JSON.stringify(data.student))

    push('/signup/password')
  } catch(error) {
    errorMessage.set(error.response.data.message)
  }
}

export async function signupPassword(password) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/password`,
      {password},
      tokenConfig(localStorage.getItem('token'))
    )
    localStorage.setItem('info', JSON.stringify(data.student))

    push('/signup/passcode')
  } catch(error) {
    errorMessage.set(error.response.data.message)
  }
}

export async function signupPasscode(passcode) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/passcode`,
      {passcode},
      tokenConfig(localStorage.getItem('token'))
    )
    localStorage.setItem('info', JSON.stringify(data.student))
    localStorage.removeItem('token')
    token.set('')

    push('/welcome')
  } catch(error) {
    errorMessage.set(error.response.data.message)
  }
}