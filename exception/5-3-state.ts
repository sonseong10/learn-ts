{
  type SuccessState = {
    result: "success"
  }

  type NetworkErrorState = {
    result: "fail"
    reason: "offline" | "down" | "timeout"
  }

  type ResultState = SuccessState | NetworkErrorState

  class FetchUser {
    tryConnct(): ResultState {
      return { result: "fail", reason: "offline" }
    }
  }

  class UserService {
    constructor(private client: FetchUser) {}

    login() {
      return this.client.tryConnct()
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      const status = this.userService.login()
      if (status.result === "success") {
        // someting..
      } else {
        switch (status.reason) {
          case "down":
            return console.log("down")
          case "offline":
            return console.log("offline")
          case "timeout":
            return console.log("timeout")
          default:
            const invalidL: never = status.reason
            throw new Error(`Unknow Error: ${status.reason}`)
        }
      }
    }
  }

  const client = new FetchUser()
  const service = new UserService(client)
  const app = new App(service)
  app.run()
}
