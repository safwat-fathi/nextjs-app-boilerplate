export class ExampleService {
  private static _instance: ExampleService;

  private constructor() {
    this._init();
  }

  public static Instance(): ExampleService {
    if (!ExampleService._instance) {
      ExampleService._instance = new ExampleService();
    }

    return ExampleService._instance;
  }

  private async _init() {
    await this._privMethod();
  }

  private _privMethod() {
    console.log("private method");
  }

  publicMethod() {
    console.log("public method");
    return true;
  }
}
