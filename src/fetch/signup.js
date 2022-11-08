import axios from "axios"
import { push } from "svelte-spa-router";
import { tokenConfig, config, apiURL } from '../axiosConfig';
import {errorMessage, token, info, phoneNumber, loading} from '../stores'
import {get} from 'svelte/store'

export async function signupBasic(lastName, firstName, phone) {
  try {
    loading.set(true)
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/basic`,
      {lastName, firstName, phone},
      config
    )
    loading.set(false)

    phoneNumber.set(phone)
    
    localStorage.setItem('info', JSON.stringify(data.student))
    info.set(data.student)

    token.set(data.token)

    push('/signup/verify-code')
  } catch(error) {
    errorMessage.set(error.response.data.message)
    loading.set(false)
  }
}

export async function signupVerifyCode(code) {
  try {
    let phone = get(phoneNumber)
    loading.set(true)
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/verify-code`,
      {phone, code},
      tokenConfig(get(token))
    )
    loading.set(false)
    
    localStorage.setItem('info', JSON.stringify(data.student))
    info.set(data.student)

    token.set(data.token)

    push('/signup/grade')
  } catch(error) {
    errorMessage.set(error.response.data.message)
    loading.set(false)
  }
}

export async function signupGrade(gradeNumber, gradeLetter) {
  try {
    loading.set(true)
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/grade`,
      {gradeNumber, gradeLetter},
      tokenConfig(get(token))
    )
    loading.set(false)
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
    loading.set(true)
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/password`,
      {password},
      tokenConfig(get(token)),
    )
    loading.set(false)
    localStorage.setItem('info', JSON.stringify(data.student))
    info.set(data.student)

    push('/signup/passcode')
  } catch(error) {
    errorMessage.set(error.response.data.message)
    loading.set(false)
  }
}

export async function signupPasscode(passcode) {
  try {
    loading.set(true)
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/passcode`,
      {passcode},
      tokenConfig(get(token))
    )
    loading.set(false)
    localStorage.setItem('info', JSON.stringify(data.student))
    info.set(data.student)

    token.set('')

    push('/welcome')
  } catch(error) {
    errorMessage.set(error.response.data.message)
    loading.set(false)
  }
}