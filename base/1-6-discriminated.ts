{
  // ex] login
  type SuccessState = {
    result: "success"
    response: {
      body: string
    }
  }
  type FailState = {
    result: "fail"
    error: {
      status: number
    }
  }
  type LoginState = SuccessState | FailState

  function login(id: string, pw: string): LoginState {
    return {
      result: "success",
      response: {
        body: "login",
      },
    }
  }

  // printLoginState(state: LoginState)
  // success => 🎉
  // fail => 😢
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`)
    } else {
      console.log(`😢 ${state.error.status}`)
    }
  }
}
