import { WorkspaceScanner } from "./workspace-scanner";
import { ProjectAnalyzer } from "./project-analyzer";
import { CodeIndexer } from "./code-indexer";
import { DependencyGraph } from "./dependency-graph";

export class WorkspaceManager {
  constructor(
    private scanner: WorkspaceScanner,
    private analyzer: ProjectAnalyzer,
    private indexer: CodeIndexer,
    private graph: DependencyGraph
  ) {}

  async buildIndex(): Promise<void> {
    const files = await this.scanner.scan();

    for (const file of files) {
      if (!file.path.endsWith(".ts")) {
        continue;
      }

      const index = await this.indexer.index(file.path);
      this.graph.add(index);
    }

    console.log(`Workspace indexed (${this.graph.count()} TypeScript files)`);
  }
}
