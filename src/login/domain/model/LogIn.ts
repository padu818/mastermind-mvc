export class LogIn {
  isLogIn: boolean;

  private static _instance: LogIn;

  constructor() {
    this.isLogIn = true;
  }

  public static getInstance() {
    return this._instance || (this._instance = new LogIn());
  }

  logIn() {
    this.isLogIn = true;
  }
  logOut() {
    this.isLogIn = false;
  }
}
