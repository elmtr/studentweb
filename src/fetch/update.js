import axios from "axios"
import { tokenConfig, apiURL } from '../axiosConfig';

export async function updateDecreasePoints(token, key) {
  const {data} = await axios.patch(
    `${apiURL}/v1/student/points/decrease?key=${key}`,
    {},
    tokenConfig(token)
  )
}

export async function updateIncreasePoints(token, key) {
  const {data} = await axios.patch(
    `${apiURL}/v1/student/points/increase?key=${key}`,
    {},
    tokenConfig(token)
  )
}

export async function updateDefinitivateDraftMark(token, key) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/student/draftmarks/definitivate?key=${key}`,
      {},
      tokenConfig(token)
    )
  } catch(error) {
    console.log(error.response.data.message)
    return error
  }
}

export async function updateModifyDraftMark(token, key, value, dateDay, dateMonth, subjectKey, studentKey) {
  try {
    const {data} = await axios.put(
      `${apiURL}/v1/student/draftmarks`,
      {key, value, dateDay, dateMonth, subjectKey, studentKey},
      tokenConfig(token)
    )
  } catch(error) {
    console.log(error.response)
  }
}

export async function updateMotivateTruancy(token, key) {
  try {
    const {data} = await axios.patch(
      `${apiURL}/v1/student/truancies?key=${key}`,
      {},
      tokenConfig(token)
    )
  } catch(error) {
    console.log(error.response)
  }
}

