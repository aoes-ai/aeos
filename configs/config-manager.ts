export interface Config {
  key: string;
  value: any;
}

export class ConfigManager {
  private configs: Map<string, any> = new Map();

  set(key: string, value: any): void {
    this.configs.set(key, value);
    console.log(`Config set: ${key}`);
  }

  get<T = any>(key: string): T | undefined {
    return this.configs.get(key);
  }

  has(key: string): boolean {
    return this.configs.has(key);
  }

  delete(key: string): void {
    this.configs.delete(key);
    console.log(`Config deleted: ${key}`);
  }

  list(): Config[] {
    return Array.from(this.configs.entries()).map(([key, value]) => ({
      key,
      value,
    }));
  }
}
