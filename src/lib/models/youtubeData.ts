import type { YoutubeVideo } from "./youtubeVideo"

export class YoutubeData {
  id: number | undefined = undefined
  channel_id: string | undefined = undefined
  videos: YoutubeVideo[] | undefined = undefined

  constructor(
    id: number | undefined = undefined,
    channel_id: string | undefined = undefined,
    videos: YoutubeVideo[] | undefined = undefined,
  ) {
    this.id = id
    this.channel_id = channel_id
    this.videos = videos
  }
}
