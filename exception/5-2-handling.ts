{
  class TimeOut extends Error {}

  class OfflineError extends Error {}

  class FetchUser {
    tryConnct(): void {
      throw new OfflineError("missing netwok!")
    }
  }

  class UserService {
    constructor(private client: FetchUser) {}

    login() {
      this.client.tryConnct()
      // somting..
    }

    logout(client: FetchUser): void {
      console.log(`logout ${client}`)
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login()
      } catch (error) {
        //error => any
        console.log(`catch ${error}`)
      }
    }
  }

  const client = new FetchUser()
  const service = new UserService(client)
  service.login()
}
