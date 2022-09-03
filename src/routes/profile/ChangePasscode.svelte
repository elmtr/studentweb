<script>

  import axios from 'axios'
  import {apiURL, tokenConfig} from '../../axiosConfig'
  import {pop} from 'svelte-spa-router'
  import {token} from '../../stores'

  let passcode
  let newPasscode

  async function submit() {
    try {
      const {data} = await axios.post(
        `${apiURL}/v1/student/profile/change-passcode`,
        {passcode, newPasscode},
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
  <input name="passcode" placeholder="passcode" type="text" bind:value={passcode}>
  <input name="newPasscode" placeholder="newPasscode" type="text" bind:value={newPasscode}>

  <input type="submit" value="submit" on:click={submit}/>
</main>