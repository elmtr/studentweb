<script>

  import axios from 'axios'
  import {config, apiURL} from '../../axiosConfig'
  import {push} from 'svelte-spa-router'

  let firstName
  let lastName

  async function submit() {
    try {
      const {data} = await axios.post(
        `${apiURL}/v1/student/signup/basic`,
        {firstName, lastName},
        config
      )
      localStorage.setItem('userInfo', JSON.stringify(data.student))
      localStorage.setItem('userToken', data.token)
      push('/signup/phone')
    } catch(error) {
      console.log(error.response.data.message)
    }
  }

</script>

<main>
  <br>
  <input name="firstName" placeholder="firstName" type="text" bind:value={firstName}>
  <input name="lastName" placeholder="lastName" type="text" bind:value={lastName}>

  <input type="submit" value="submit" on:click={submit}/>
</main>