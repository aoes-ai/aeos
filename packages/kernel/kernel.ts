import { AIManager } from "../../models/ai-manager";
import { ProviderRegistry } from "./provider-registry";
import { ModelRouter } from "../routing/model-router";
import { PluginManager } from "../plugins/plugin-manager";

export class Kernel {
  readonly providers: ProviderRegistry;

  readonly router: ModelRouter;

  readonly plugins: PluginManager;

  constructor(public readonly ai: AIManager) {
    this.providers = new ProviderRegistry(ai);

    this.router = new ModelRouter(ai);

    this.plugins = new PluginManager();
  }

  async initialize(): Promise<void> {
    console.log("=================================");
    console.log("Initializing AEOS Kernel");
    console.log("=================================");

    await this.plugins.discover();

    await this.plugins.initialize();

    console.log("Kernel ready.");
    console.log("=================================");
  }
}
