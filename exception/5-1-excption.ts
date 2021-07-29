// Other: Exception
// JS: Error

// Error handling: try -> catch -> finally

function playMusic(music: string): string {
  if (!music.length) {
    throw new Error(`Not found music: ${music}`)
  }
  return `start music... 🎵 ${music}`
}

function stopMusic(music: string): string {
  if (!music.length) {
    throw new Error(`Not found music: ${music}`)
  }
  return `stop music... 🎵 ${music}`
}

let music = "ABC"

try {
  console.log(playMusic(music))
} catch (error) {
  console.log("Catch!")
} finally {
  console.log(stopMusic(music))
}

// music = ""

// try {
//   console.log(playMusic(music))
// } catch (error) {
//   console.log("Catch!")
// } finally {
// }
// console.log(stopMusic(music))
