export class ExternalServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ExternalServerError";
  }
}
