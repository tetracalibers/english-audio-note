<script lang="ts">
  import { onMount } from "svelte"
  import PlayIcon from "../icons/play-icon.svelte"
  import StopIcon from "../icons/stop-icon.svelte"

  export let en: string
  export let ja = ""

  let speaker: SpeechSynthesisUtterance

  const speak = () => {
    window.speechSynthesis.speak(speaker)
    //speaker.onend = speak
  }

  const stop = () => {
    speaker.onend = null
    window.speechSynthesis.cancel()
  }

  const loadVoice = () => {
    const voices = speechSynthesis.getVoices()
    speaker.voice = voices.find(function (voice) {
      return voice.name === "Google US English"
    })
  }

  onMount(async () => {
    // 発言を設定
    speaker = new SpeechSynthesisUtterance()
    // テキストを設定
    speaker.text = en
    // 言語を設定
    speaker.lang = "en-US"
    // 速度を設定
    speaker.rate = 0.7
    // 声を設定
    loadVoice()
    window.speechSynthesis.addEventListener("voiceschanged", loadVoice)
  })
</script>

<div class="PhraseSpeaker">
  <div class="PhraseSpeaker__buttons">
    <button
      class="PhraseSpeaker-Control --speak"
      on:click={speak}
      aria-label="speak"
    >
      <PlayIcon size="1rem" />
    </button>
    <button
      class="PhraseSpeaker-Control --stop"
      on:click={stop}
      aria-label="stop"
    >
      <StopIcon size="1rem" />
    </button>
  </div>
  <div class="PhraseSpeaker-Phrase">
    <p lang="en">{en}</p>
    <p lang="ja">{ja}</p>
  </div>
</div>

<style>
  .PhraseSpeaker {
    display: flex;
  }

  .PhraseSpeaker-Phrase > :lang(en) {
    font-size: 1.5rem;
  }

  .PhraseSpeaker-Phrase > :lang(ja) {
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
