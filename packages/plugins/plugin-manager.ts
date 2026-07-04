import { AEOSPlugin } from "./plugin";
import { PluginLoader } from "./plugin-loader";

export class PluginManager {
  private plugins = new Map<string, AEOSPlugin>();

  private loader = new PluginLoader();

  register(plugin: AEOSPlugin): void {
    this.plugins.set(plugin.id, plugin);

    console.log(`Plugin registered: ${plugin.name}`);
  }

  async discover(): Promise<void> {
    console.log("");
    console.log("Scanning integrations...");

    const discovered = await this.loader.discover();

    if (discovered.length === 0) {
      console.log("No integrations discovered.");
      return;
    }

    console.log(`Discovered ${discovered.length} integration(s):`);

    for (const plugin of discovered) {
      console.log(` • ${plugin}`);
    }

    console.log("");
  }

  async initialize(): Promise<void> {
    for (const plugin of this.plugins.values()) {
      await plugin.initialize();
    }

    console.log(`${this.plugins.size} plugins initialized`);
  }

  async shutdown(): Promise<void> {
    for (const plugin of this.plugins.values()) {
      if (plugin.shutdown) {
        await plugin.shutdown();
      }
    }
  }

  get(id: string): AEOSPlugin | undefined {
    return this.plugins.get(id);
  }

  list(): AEOSPlugin[] {
    return [...this.plugins.values()];
  }

  count(): number {
    return this.plugins.size;
  }
}
