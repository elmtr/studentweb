<script>
  import { onMount } from 'svelte'
  import { push } from 'svelte-spa-router'


  onMount(() => {
    localStorage.removeItem('info')
    localStorage.removeItem('phone')
    localStorage.removeItem('token')

    push('/welcome')
  })
</script>