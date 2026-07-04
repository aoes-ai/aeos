import { AEOS } from "../orchestration/aeos";
import { ProviderManager } from "../integrations/provider-manager";
import { WorkspaceManager } from "../tools/workspace-manager";
import { WorkspaceScanner } from "../tools/workspace-scanner";
import { ProjectAnalyzer } from "../tools/project-analyzer";
import { CodeIndexer } from "../tools/code-indexer";
import { DependencyGraph } from "../tools/dependency-graph";
import { MigrationEngine } from "../tools/migration-engine";
import { AITaskRunner } from "../models/ai-task-runner";

export class AEOSApplication {
  private aeos = new AEOS();

  async start(): Promise<void> {
    console.log("=================================");
    console.log("AEOS Application Starting");
    console.log("=================================");

    // Initialize AEOS
    await this.aeos.initialize();

    // Initialize AI providers
    const providerManager = new ProviderManager(this.aeos.ai);
    await providerManager.initialize();

    // Analyze and index workspace
    const workspace = new WorkspaceManager(
      new WorkspaceScanner(new ProjectAnalyzer()),
      new ProjectAnalyzer(),
      new CodeIndexer(),
      new DependencyGraph()
    );

    await workspace.buildIndex();

    // Prepare AEOS v1 workspace structure
    const migration = new MigrationEngine();
    await migration.initialize();

    // Test AI connectivity
    const runner = new AITaskRunner(this.aeos.ai);

    await runner.run(
      "gemini",
      `You are AEOS.

Introduce yourself.

Explain:

1. Your architecture
2. Your autonomous capabilities
3. Your engineering abilities
4. The AI providers available
5. The tools available
6. Your long-term vision

Keep the response professional and concise.`
    );

    console.log("");
    console.log("=================================");
    console.log("AEOS is ready.");
    console.log("System online.");
    console.log("=================================");
  }

  async stop(): Promise<void> {
    await this.aeos.shutdown();
  }

  get system(): AEOS {
    return this.aeos;
  }
}
