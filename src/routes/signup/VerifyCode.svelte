<script>

  import axios from 'axios'
  import {tokenConfig, apiURL} from '../../axiosConfig'
  import {push} from 'svelte-spa-router'
  
  let code

  async function submit() {
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

</script>

<main>
  <input name="verify-code" placeholder="verify-code" type="text" bind:value={code} />

  <input type="submit" value="submit" on:click={submit}/>
</main>