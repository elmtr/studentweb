<script>
  import { onMount } from 'svelte'
  import { push } from 'svelte-spa-router'
  import {info, token} from '../../stores'


  onMount(() => {
    localStorage.removeItem('info')
    localStorage.removeItem('phone')
    localStorage.removeItem('token')

    $info = {}
    $token = ""

    push('/welcome')
  })
</script>