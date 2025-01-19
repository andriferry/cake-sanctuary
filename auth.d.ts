declare module '#auth-utils' {
  interface User {
    name: string,
    email: string,
    picture: string
  }

  interface UserSession {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    extended?: any
    jtw?: {
      accessToken: string
      refreshToken: string
    }
    loggedInAt: number
  }

  interface SecureSessionData {
  }
}

export {}
