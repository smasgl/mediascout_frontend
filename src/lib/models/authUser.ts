export class AuthUser {
  name: string | undefined = undefined
  permissions: string[] | undefined = undefined

  constructor(
    name: string | undefined = undefined,
    permissions: string[] | undefined = undefined
  ) {
    this.name = name
    this.permissions = permissions
  }
}
