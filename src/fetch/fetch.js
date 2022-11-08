import axios from "axios"
import { tokenConfig, apiURL } from '../axiosConfig';
import {sortPeriods} from '../sort/sort'
import {get} from 'svelte/store'
import {subjects, draftMarks,  marks, truancies, timetable, school, loading} from '../stores'

export async function fetchSchool(token) {
  let schoolValue = {}
  school.subscribe(value => {
    schoolValue = value
  })
  if (!schoolValue.key) {
    loading.set(true)
    const {data} = await axios.get(
      `${apiURL}/v1/student/timetable/school`,
      tokenConfig(token),
    )
    loading.set(false)
    schoolValue = data
    school.set(schoolValue)
  }

  return schoolValue
}

export async function fetchTimetable(token) {
  let timetableValue = {}
  timetable.subscribe(value => {
    timetableValue = value
  })
  if (!timetableValue[1]) {
    loading.set(true)
    const {data} = await axios.get(
      `${apiURL}/v1/student/timetable`,
      tokenConfig(token),
    )
    loading.set(false)
    timetableValue = sortPeriods(data)
    timetable.set(timetableValue)
  }
  return timetableValue
}

export async function fetchSubjects(token) {
  let subjectsValue = get(subjects)
  if (subjectsValue.length == 0) {
    loading.set(true)
    let {data} = await axios.get(
      `${apiURL}/v1/student/subjects`,
      tokenConfig(token),
    )
    loading.set(false)
    data.sort((a, b) => {
      if (a.ord > b.ord) {
        return 1
      }
      if (a.ord < b.ord) {
        return -1
      }
      return 0
    })
    subjectsValue = data
    subjects.set(data)
  }
  return subjectsValue
}

export async function fetchDraftMarks(token, subjectKey, studentKey) {
  loading.set(true)
  const {data} = await axios.get(
    `${apiURL}/v1/student/draftMarks?subjectKey=${subjectKey}`,
    tokenConfig(token),
  )
  loading.set(false)
  draftMarks.set(data)

  return data
}

export async function fetchMarks(token, subjectKey, studentKey) {
  loading.set(true)
  const {data} = await axios.get(
    `${apiURL}/v1/student/marks?subjectKey=${subjectKey}`,
    tokenConfig(token),
  )
  loading.set(false)
  marks.set(data)

  return data
}

export async function fetchTruancies(token, subjectKey, studentKey) {
  loading.set(true)
  const {data} = await axios.get(
    `${apiURL}/v1/student/truancies?subjectKey=${subjectKey}`,
    tokenConfig(token),
  )
  loading.set(false)
  truancies.set(data)

  return data
}

export async function fetchPoints(token, subjectKey, studentKey) {
  loading.set(true)
  const {data} = await axios.get(
    `${apiURL}/v1/student/points?subjectKey=${subjectKey}`,
    tokenConfig(token),
  )
  loading.set(false)

  return data
}
