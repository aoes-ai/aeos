import { ProjectAnalyzer } from "./project-analyzer";

export class WorkspaceScanner {
  constructor(private analyzer: ProjectAnalyzer) {}

  async scan() {
    const files = await this.analyzer.scan(".");

    console.log(`Workspace scanned: ${files.length} files`);

    return files;
  }
}
