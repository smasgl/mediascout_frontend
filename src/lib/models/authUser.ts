import type {YoutubeData} from './youtubeData'

export class AuthUser {
  name: string | undefined = undefined
  password: string | undefined = undefined
  permissions: string[] | undefined = undefined

  constructor(
    name: string | undefined = undefined,
    password: string | undefined = undefined,
    permissions: string[] | undefined = undefined
  ) {
    this.name = name
    this.password = password
    this.permissions = permissions
  }
}
