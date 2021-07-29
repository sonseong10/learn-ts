{
  type Video = {
    title: string
    playTime: number
    desc: string
  }

  // 💩
  // type VideoOptional = {
  //   title: string
  //   playTime?: number
  //   desc: string
  // }

  // type VideoReadOnly {
  //   readonly title: string
  //   readonly playTime: number
  //   readonly desc: string
  // }

  type Optional<T> = {
    [P in keyof T]?: T[P] // for...in
  }
  type VideoOptional = Optional<Video>
  const videoOption: VideoOptional = {
    title: "Titanic",
  }

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]
  }
  type VideoReadOnly = ReadOnly<Video>
  const videoRead: VideoReadOnly = {
    title: "screen",
    desc: "this showmenship very good!",
    playTime: 32,
  }

  type Nullable<T> = { [P in keyof T]: T[P] | null }
  const videoNull: Nullable<Video> = {
    title: "rabbit",
    desc: null,
    playTime: 340,
  }
}
