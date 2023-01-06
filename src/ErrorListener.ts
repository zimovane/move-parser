import error from "antlr4/error";

class ErrorListener extends error.ErrorListener {
  private _errors: any[];

  constructor() {
    super();

    this._errors = [];
  }

  syntaxError(
    recognizer: any,
    offendingSymbol: any,
    line: number,
    column: number,
    message: string
  ) {
    this._errors.push({ message, line, column });
  }

  getErrors(): any[] {
    return this._errors;
  }

  hasErrors() {
    return this._errors.length > 0;
  }
}

export default ErrorListener;
