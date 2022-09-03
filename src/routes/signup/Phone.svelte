<script>

  import axios from 'axios'
  import {tokenConfig, apiURL} from '../../axiosConfig'
  import {push} from 'svelte-spa-router'

  let phone

  async function submit() {
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

</script>

<main>
  <input name="phone" placeholder="phone" type="text" bind:value={phone}>

  <input type="submit" value="submit" on:click={submit}/>
</main>