import { promises as fs } from "fs";
import * as path from "path";

export interface ProjectFile {
  name: string;
  path: string;
}

export class ProjectAnalyzer {
  async scan(directory: string): Promise<ProjectFile[]> {
    const files: ProjectFile[] = [];

    await this.walk(directory, files);

    return files;
  }

  private async walk(directory: string, files: ProjectFile[]): Promise<void> {
    const entries = await fs.readdir(directory, {
      withFileTypes: true,
    });

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        if (entry.name === "node_modules" || entry.name === ".git") {
          continue;
        }

        await this.walk(fullPath, files);
      } else {
        files.push({
          name: entry.name,
          path: fullPath,
        });
      }
    }
  }
}
