<script lang="ts">
  import PlayIcon from "../icons/play-icon.svelte"

  interface Word {
    en: string
    ja: string
    past?: string
  }

  export let word: Word
  const { en, ja, past } = word
</script>

<div class="WordCard">
  <button class="WordCard-AudioControl --speak" aria-label="speak">
    <PlayIcon />
  </button>
  <section class="WordCard-Content">
    <h2 lang="en" class="WordCard-data --en">{en}</h2>
    <p class="WordCard-data --ja">
      <span class="visually-hidden"> 和訳すると、 </span>
      {ja}
    </p>
    {#if past}
      <p class="WordCard-data --past">
        <span class="Badge --past">過</span>
        <span class="visually-hidden">去形は</span>
        <span lang="en">{past}</span>
      </p>
    {/if}
  </section>
</div>

<style>
  :lang(en) {
    font-weight: bold;
  }

  .WordCard {
    display: flex;
    align-items: center;
    border-radius: 40px;
    background-color: #fff;
    color: #6e85b7;
    padding: 2em;
    gap: 2em;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  }

  .WordCard-AudioControl {
    flex-shrink: 0;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-image: linear-gradient(to right, #a770ef 0%, #cf8bf3 100%);
    opacity: 0.9;
  }

  .WordCard-data.--en {
    font-size: 1.5em;
  }

  .WordCard-data.--past {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .Badge {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    color: #000;
  }

  .Badge.--past {
    background-color: #cdf0ea;
  }
</style>
