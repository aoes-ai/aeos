import { promises as fs } from "fs";
import * as path from "path";

export class FileWriter {
  async write(file: string, content: string): Promise<void> {
    const fullPath = path.resolve(file);

    await fs.mkdir(path.dirname(fullPath), {
      recursive: true,
    });

    await fs.writeFile(fullPath, content, "utf8");

    console.log(`Generated: ${file}`);
  }

  async read(file: string): Promise<string> {
    return fs.readFile(file, "utf8");
  }

  async exists(file: string): Promise<boolean> {
    try {
      await fs.access(file);
      return true;
    } catch {
      return false;
    }
  }
}
