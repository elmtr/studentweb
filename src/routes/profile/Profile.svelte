<script>
  import {link} from 'svelte-spa-router'
  import {info} from '../../stores'
  let profile = $info
</script>

<main>
  {#if profile}
    {profile.lastName} {profile.firstName}
    <br>
    {#if profile.grade.id !== ""}
      {profile.grade.gradeNumber}{profile.grade.gradeLetter} <br>
    {/if}

    <a href="/profile/change-password" use:link>schimba parola</a><br>
    <a href="/profile/change-passcode" use:link>schimba codul de acces</a>
  {/if}
</main>