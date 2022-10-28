import axios from "axios"
import { push } from "svelte-spa-router";
import { tokenConfig, config, apiURL } from '../axiosConfig';
import {errorMessage, token} from '../stores'

// export async function signupBasic(firstName, lastName) {
//   try {
//     const {data} = await axios.post(
//       `${apiURL}/v1/student/signup/basic`,
//       {firstName, lastName},
//       config
//     )
//     localStorage.setItem('userInfo', JSON.stringify(data.student))
//     localStorage.setItem('userToken', data.token)
//     push('/signup/phone')
//   } catch(error) {
//     console.log(error.response.data.message)
//   }
// }

export async function signupBasic(lastName, firstName, phone) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/basic`,
      {lastName, firstName, phone},
      config
    )
    localStorage.setItem('userInfo', JSON.stringify(data.student))
    localStorage.setItem('userToken', data.token)
    localStorage.setItem("phone", phone)

    push('/signup/verify-code')
  } catch(error) {
    errorMessage.set(error.response.data.message)
  }
}

export async function signupPhone(phone) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/phone`,
      {phone},
      tokenConfig(localStorage.getItem("userToken"))
    )
    localStorage.setItem("phone", phone)

    push('/signup/verify-code')
  } catch(error) {
    console.log(error.response.data.message)
  }
}

export async function signupVerifyCode(phone, code) {
  try {
    let phone = localStorage.getItem("phone")
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/verify-code`,
      {phone, code},
      tokenConfig(localStorage.getItem("userToken"))
    )
    localStorage.setItem("userToken", data.token)
    localStorage.setItem("userInfo", JSON.stringify(data.student))

    push('/signup/grade')
  } catch(error) {
    console.log(error.response.data.message)
  }
}

export async function signupGrade(gradeNumber, gradeLetter) {
  try {
    let phone = localStorage.getItem("phone")
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/grade`,
      {gradeNumber, gradeLetter},
      tokenConfig(localStorage.getItem("userToken"))
    )
    localStorage.setItem("userToken", data.token)
    localStorage.setItem("userInfo", JSON.stringify(data.student))

    push('/signup/password')
  } catch(error) {
    console.log(error.response.data.message)
  }
}

export async function signupPassword(password) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/password`,
      {password},
      tokenConfig(localStorage.getItem("userToken"))
    )
    localStorage.setItem("userInfo", JSON.stringify(data.student))

    push('/signup/passcode')
  } catch(error) {
    console.log(error.response.data.message)
  }
}

export async function signupPasscode(passcode) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/student/signup/passcode`,
      {passcode},
      tokenConfig(localStorage.getItem("userToken"))
    )
    localStorage.setItem("userInfo", JSON.stringify(data.student))
    localStorage.removeItem("userToken")
    token.set("")

    push('/')
  } catch(error) {
    console.log(error.response.data.message)
  }
}