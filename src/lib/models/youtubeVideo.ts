export class YoutubeVideo {
  id: number | undefined = undefined
  video_id: string | undefined = undefined
  title: string | undefined = undefined
  length: number | undefined = undefined
  published_at: Date | undefined = undefined

  constructor(
    id: number | undefined = undefined,
    video_id: string | undefined = undefined,
    title: string | undefined = undefined,
    length: number | undefined = undefined,
    published_at: Date | undefined = undefined,
  ) {
    this.id = id
    this.video_id = video_id
    this.title = title
    this.length = length
    this.published_at = published_at
  }
}
