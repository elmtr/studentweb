<script>

  import axios from 'axios'
  import {tokenConfig, apiURL} from '../../axiosConfig'
  import {push} from 'svelte-spa-router'
  
  let passcode

  async function submit() {
    try {
      const {data} = await axios.post(
        `${apiURL}/v1/student/signup/passcode`,
        {passcode},
        tokenConfig(localStorage.getItem("userToken"))
      )
      localStorage.setItem("userInfo", JSON.stringify(data.student))
      localStorage.removeItem("userToken")

      push('/')
    } catch(error) {
      console.log(error.response.data.message)
    }
  }

</script>

<main>
  <input name="passcode" placeholder="passcode" type="text" bind:value={passcode}>

  <input type="submit" value="submit" on:click={submit}/>
</main>