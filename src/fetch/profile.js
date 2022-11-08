import axios from "axios"
import { pop } from "svelte-spa-router";
import { config, tokenConfig, apiURL } from '../axiosConfig';
import {token, info, loading} from '../stores'
import {get} from 'svelte/store'

export async function changePassword(password, newPassword) {
  try {
    loading.set(true)
    const {data} = await axios.post(
      `${apiURL}/v1/student/profile/change-password`,
      {password, newPassword},
      tokenConfig(get(token)),
    )
    loading.set(false)
    localStorage.setItem('info', JSON.stringify(data))
    pop()
  } catch(error) {
    console.log(error.response.data.message)
    loading.set(false)
  }
}

export async function changePasscode(passcode, newPasscode) {
  try {
    loading.set(true)
    const {data} = await axios.post(
      `${apiURL}/v1/student/profile/change-passcode`,
      {passcode, newPasscode},
      tokenConfig(get(token)),
    )
    loading.set(false)
    localStorage.setItem('info', JSON.stringify(data))
    
    pop()
  } catch(error) {
    console.log(error.response.data.message)
    loading.set(false)
  }
}