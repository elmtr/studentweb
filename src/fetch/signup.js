import axios from "axios"
import { push } from "svelte-spa-router";
import { tokenConfig, config, apiURL } from '../axiosConfig';
import {errorMessage, token, info, phoneNumber} from '../stores'
import {get} from 'svelte/store'

export async function signupBasic(lastName, firstName, phone) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/basic`,
      {lastName, firstName, phone},
      config
    )
    phoneNumber.set(phone)
    
    localStorage.setItem('info', JSON.stringify(data.student))
    info.set(data.student)

    token.set(data.token)

    push('/signup/verify-code')
  } catch(error) {
    errorMessage.set(error.response.data.message)
  }
}

export async function signupVerifyCode(code) {
  try {
    let phone = get(phoneNumber)
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/verify-code`,
      {phone, code},
      tokenConfig(get(token))
    )
    
    localStorage.setItem('info', JSON.stringify(data.student))
    info.set(data.student)

    token.set(data.token)

    push('/signup/grade')
  } catch(error) {
    errorMessage.set(error.response.data.message)
  }
}

export async function signupGrade(gradeNumber, gradeLetter) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/grade`,
      {gradeNumber, gradeLetter},
      tokenConfig(get(token))
    )
    localStorage.setItem('info', JSON.stringify(data.student))
    info.set(data.student)

    token.set(data.token)
      
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
      tokenConfig(get(token)),
    )
    localStorage.setItem('info', JSON.stringify(data.student))
    info.set(data.student)

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
      tokenConfig(get(token))
    )
    localStorage.setItem('info', JSON.stringify(data.student))
    info.set(data.student)

    token.set('')

    push('/welcome')
  } catch(error) {
    errorMessage.set(error.response.data.message)
  }
}