<script>

  import axios from 'axios'
  import {tokenConfig, apiURL} from '../../axiosConfig'
  import {push} from 'svelte-spa-router'
  
  let password

  async function submit() {
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

</script>

<main>
  <input name="password" placeholder="password" type="text" bind:value={password}>

  <input type="submit" value="submit" on:click={submit}/>
</main>