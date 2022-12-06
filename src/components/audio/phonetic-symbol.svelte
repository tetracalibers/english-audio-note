<script lang="ts">
  import { Speaker } from "./speaker"

  export let words: string[]
  export let symbol: string

  let isSpeaking = false

  const speaker = new Speaker(words.join(", "), { rate: 0.4 })

  const onToggleSpeak = () => {
    isSpeaking ? speaker.stop() : speaker.speak()
    isSpeaking = !isSpeaking
  }
</script>

<button
  type="button"
  on:click={onToggleSpeak}
  class="symbol"
  aria-label={`単語例${isSpeaking ? "の読み上げを停止する" : "を読み上げる"}`}
>
  {symbol}
</button>

<style>
  .symbol {
    font-size: 5rem;
    line-height: 0.5;
    padding-bottom: 0.5em;
    color: #ff66bc;
    text-shadow: 3px 2px 0px #eef1ff;
  }
</style>
