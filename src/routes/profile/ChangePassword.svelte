<script>

  import axios from 'axios'
  import {apiURL, tokenConfig} from '../../axiosConfig'
  import {pop} from 'svelte-spa-router'
  import {token} from '../../stores'

  let password
  let newPassword

  async function submit() {
    try {
      const {data} = await axios.post(
        `${apiURL}/v1/student/profile/change-password`,
        {password, newPassword},
        tokenConfig($token),
      )
      localStorage.setItem('userInfo', JSON.stringify(data))
      pop()
    } catch(error) {
      console.log(error.response.data.message)
    }
  }

</script>

<main>
  <br>
  <input name="password" placeholder="password" type="text" bind:value={password}>
  <input name="newPassword" placeholder="newPassword" type="text" bind:value={newPassword}>

  <input type="submit" value="submit" on:click={submit}/>
</main>