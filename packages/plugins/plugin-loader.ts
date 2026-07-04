import { promises as fs } from "fs";
import * as path from "path";

export class PluginLoader {
  constructor(private readonly root = "integrations") {}

  async discover(): Promise<string[]> {
    const discovered: string[] = [];

    await this.walk(this.root, discovered);

    return discovered.sort();
  }

  private async walk(directory: string, discovered: string[]): Promise<void> {
    try {
      const entries = await fs.readdir(directory, {
        withFileTypes: true,
      });

      for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
          await this.walk(fullPath, discovered);
          continue;
        }

        if (
          entry.isFile() &&
          (entry.name.endsWith(".ts") || entry.name.endsWith(".js"))
        ) {
          discovered.push(fullPath);
        }
      }
    } catch {
      // Ignore missing directories
    }
  }
}
