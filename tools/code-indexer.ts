import { promises as fs } from "fs";

export interface CodeIndex {
  file: string;
  imports: string[];
  exports: string[];
  classes: string[];
  interfaces: string[];
}

export class CodeIndexer {
  async index(filePath: string): Promise<CodeIndex> {
    const content = await fs.readFile(filePath, "utf-8");

    return {
      file: filePath,
      imports: this.find(content, /^import .*$/gm),
      exports: this.find(content, /^export .*$/gm),
      classes: this.find(content, /class\s+([A-Za-z0-9_]+)/g),
      interfaces: this.find(content, /interface\s+([A-Za-z0-9_]+)/g),
    };
  }

  private find(content: string, regex: RegExp): string[] {
    const results: string[] = [];
    let match: RegExpExecArray | null;

    while ((match = regex.exec(content)) !== null) {
      results.push(match[1] ?? match[0]);
    }

    return results;
  }
}
