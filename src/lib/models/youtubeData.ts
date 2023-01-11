export class YoutubeData {
  id: number | undefined = undefined
  url: string | undefined = undefined
  channel_id: string | undefined = undefined

  constructor(
    id: number | undefined = undefined,
    url: string | undefined = undefined,
    channel_id: string | undefined = undefined
  ) {
    this.id = id
    this.url = url
    this.channel_id = channel_id
  }
}
