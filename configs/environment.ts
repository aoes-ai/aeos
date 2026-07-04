export class Environment {
  static get(key: string, fallback = ""): string {
    return process.env[key] ?? fallback;
  }

  static has(key: string): boolean {
    return key in process.env;
  }
}
