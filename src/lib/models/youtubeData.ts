export class YoutubeData {
  id: number | undefined = undefined
  url: string | undefined = undefined
  imageUrl: string | undefined = undefined

  constructor(
    id: number | undefined = undefined,
    url: string | undefined = undefined,
    imageUrl: string | undefined = undefined
  ) {
    this.id = id
    this.url = url
    this.imageUrl = imageUrl
  }
}
