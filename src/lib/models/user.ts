import {YoutubeData} from './youtubeData'

export class User {
  id: number | undefined = undefined
  name: string | undefined = undefined
  youtube: YoutubeData | undefined = undefined

  constructor(
    id: number | undefined = undefined,
    name: string | undefined = undefined,
    youtube: YoutubeData | undefined = undefined
  ) {
    this.id = id
    this.name = name
    this.youtube = youtube ?? new YoutubeData()
  }
}
