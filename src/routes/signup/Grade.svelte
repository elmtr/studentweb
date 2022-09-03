<script>

  import axios from 'axios'
  import {tokenConfig, apiURL} from '../../axiosConfig'
  import {push} from 'svelte-spa-router'
  
  let gradeNumber
  let gradeLetter

  async function submit() {
    try {
      const {data} = await axios.post(
        `${apiURL}/v1/student/signup/grade`,
        {"gradeNumber": Number(gradeNumber), gradeLetter},
        tokenConfig(localStorage.getItem("userToken"))
      )

      push('/signup/password')
    } catch(error) {
      console.log(error.response.data.message)
    }
  }

</script>

<main>
  <input name="gradeNumber" placeholder="gradeNumber" type="text" bind:value={gradeNumber}>
  <input name="gradeLetter" placeholder="gradeLetter" type="text" bind:value={gradeLetter}>

  <input type="submit" value="submit" on:click={submit}/>
</main>