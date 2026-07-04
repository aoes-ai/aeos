import { CodeIndex } from "./code-indexer";

export interface DependencyNode {
  file: string;
  imports: string[];
  exports: string[];
}

export class DependencyGraph {
  private nodes: Map<string, DependencyNode> = new Map();

  add(index: CodeIndex): void {
    this.nodes.set(index.file, {
      file: index.file,
      imports: index.imports,
      exports: index.exports,
    });
  }

  get(file: string): DependencyNode | undefined {
    return this.nodes.get(file);
  }

  list(): DependencyNode[] {
    return Array.from(this.nodes.values());
  }

  count(): number {
    return this.nodes.size;
  }

  clear(): void {
    this.nodes.clear();
  }
}
