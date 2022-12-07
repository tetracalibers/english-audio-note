<script lang="ts">
  import PlayIcon from "../icons/play-icon.svelte"
  import StopIcon from "../icons/stop-icon.svelte"
  import { Speaker } from "./speaker"

  export let en: string
  export let ja = ""
  export let phonetics: string = ""

  const speaker = new Speaker(en)
  const hasPhonetics = phonetics.length > 0
</script>

<div class="PhraseSpeaker">
  <div class="PhraseSpeaker__buttons">
    <button
      class="PhraseSpeaker-Control --speak"
      on:click={speaker.speak}
      aria-label="speak"
    >
      <PlayIcon size="1rem" />
    </button>
    <button
      class="PhraseSpeaker-Control --stop"
      on:click={speaker.stop}
      aria-label="stop"
    >
      <StopIcon size="1rem" />
    </button>
  </div>
  <div class="PhraseSpeaker-Phrase" class:hasPhonetics>
    {#if hasPhonetics}
      <p class="-phonetics" aria-hidden="true">
        {phonetics}
      </p>
    {/if}
    <p lang="en">{en}</p>
    <p class="-ja">{ja}</p>
  </div>
</div>

<style>
  .PhraseSpeaker {
    display: flex;
  }

  .PhraseSpeaker-Phrase.hasPhonetics {
    padding-bottom: 2.5rem;
    margin-top: -2.5rem;
  }

  .PhraseSpeaker-Phrase :lang(en) {
    font-size: 1.5rem;
  }

  .PhraseSpeaker-Phrase .-phonetics {
    font-size: 0.8rem;
    line-height: 1;
    height: 2.5rem;
    padding-top: 1.7rem; /** 2.5rem - 0.8rem */
    text-align-last: justify;
    font-style: italic;
    color: #6e85b7;
    white-space: nowrap;
  }

  .PhraseSpeaker-Phrase .-ja {
    font-size: 0.8rem;
  }

  .PhraseSpeaker__buttons {
    display: flex;
    gap: 0.5rem;
    padding-right: 2rem;
    height: 2.5rem;
  }

  .PhraseSpeaker-Control {
    border-radius: 0.75rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: auto 0;
  }

  .PhraseSpeaker-Control.--speak {
    background-image: linear-gradient(to right, #3a7bd5 0%, #00d2ff 100%);
  }

  .PhraseSpeaker-Control.--stop {
    background-image: linear-gradient(to right, #ff512f 0%, #dd2476 100%);
  }
</style>
