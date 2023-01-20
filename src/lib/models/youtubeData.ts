export class YoutubeData {
  channel_id: string | undefined = undefined

  constructor(
    channel_id: string | undefined = undefined
  ) {
    this.channel_id = channel_id
  }
}
