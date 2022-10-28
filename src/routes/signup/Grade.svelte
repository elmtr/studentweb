<script>

  import { signupGrade } from '../../fetch/signup'
  import {pop} from 'svelte-spa-router'
  
  // kiui
  import Header from '../../kiui/Header.svelte'
  import Title from '../../kiui/Title.svelte'

  import InputSelectGrade from '../../kiui/Inputs/InputSelectGrade.svelte'
  import Previous from '../../kiui/Inputs/Previous.svelte'
  import Next from '../../kiui/Inputs/Next.svelte'

  let gradeNumber
  let gradeLetter

</script>

<main>
  <Header />
  <Title value="In ce clasa esti?" />
  
  <div id="container">
    <div class="line">
      <span>Anul: </span>
      <InputSelectGrade list={[5,6,7,8,9,10,11,12]} bind:value={gradeNumber} />
    </div>
    <div class="line">
      <span>Clasa: </span>
      <InputSelectGrade list={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']} bind:value={gradeLetter} />
    </div>
  </div>
  <Previous onClick={pop} />
  <Next active={true} onClick={async () => {
    await signupGrade(gradeNumber, gradeLetter);
  }} />
</main>

{gradeNumber} - {gradeLetter}

<style scoped>
  #container {
    width: 80%;
    margin: auto;
  }

  .line {
    float: left;
    padding: 10px;
  }

  .line span {
    margin-right: 10px;
    color: var(--black);
    font-family: var(--sans-serif);
  }
</style>
  