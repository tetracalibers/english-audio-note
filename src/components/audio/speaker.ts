import { onMount } from "svelte"

export class Speaker {
  private audio: SpeechSynthesisUtterance
  private repeat: boolean

  constructor(
    text: string,
    options: { rate?: number; repeat?: boolean } = { rate: 0.7, repeat: false },
  ) {
    onMount(() => {
      // 発言を設定
      this.audio = new SpeechSynthesisUtterance()
      // テキストを設定
      this.audio.text = text
      // 言語を設定
      this.audio.lang = "en-US"
      // 速度を設定
      this.audio.rate = options.rate
      // 繰り返すかどうか
      this.repeat = options.repeat
      // 声を設定
      this.loadVoice()
      window.speechSynthesis.addEventListener("voiceschanged", this.loadVoice)
    })
  }

  private loadVoice = () => {
    const voices = speechSynthesis.getVoices()
    this.audio.voice = voices.find(voice => {
      return voice.name === "Google US English"
    })
  }

  speak = () => {
    window.speechSynthesis.speak(this.audio)
    if (this.repeat) {
      this.audio.onend = this.speak
    }
  }

  stop = () => {
    this.audio.onend = null
    window.speechSynthesis.cancel()
  }

  resume = () => {
    window.speechSynthesis.resume()
  }

  pause = () => {
    window.speechSynthesis.pause()
  }

  repeatOn = () => {
    this.repeat = true
  }

  repeatOff = () => {
    this.repeat = false
  }

  repeatToggle = () => {
    this.repeat = !this.repeat
  }

  set rate(r: number) {
    this.audio.rate = r
  }
}
