export class YoutubeVideo {
  title: string | undefined = undefined
  channel_id: string | undefined = undefined
  published_at: Date | undefined = undefined
  path: string | undefined = undefined

  constructor(
    title: string | undefined = undefined,
    channel_id: string | undefined = undefined,
    published_at: Date | undefined = undefined,
    path: string | undefined = undefined
  ) {
    this.title = title
    this.channel_id = channel_id
    this.published_at = published_at
    this.path = path
  }
}
