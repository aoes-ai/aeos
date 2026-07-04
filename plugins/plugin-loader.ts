export interface Plugin {
  id: string;
  name: string;
  version: string;
  enabled: boolean;
  init?: () => void;
}

export class PluginLoader {
  private plugins: Map<string, Plugin> = new Map();

  register(plugin: Plugin): void {
    this.plugins.set(plugin.id, plugin);

    console.log(`Plugin registered: ${plugin.name}`);

    if (plugin.enabled && plugin.init) {
      plugin.init();
    }
  }

  get(id: string): Plugin | undefined {
    return this.plugins.get(id);
  }

  list(): Plugin[] {
    return Array.from(this.plugins.values());
  }

  enable(id: string): void {
    const plugin = this.plugins.get(id);
    if (plugin) {
      plugin.enabled = true;
      console.log(`Plugin enabled: ${plugin.name}`);
    }
  }

  disable(id: string): void {
    const plugin = this.plugins.get(id);
    if (plugin) {
      plugin.enabled = false;
      console.log(`Plugin disabled: ${plugin.name}`);
    }
  }

  count(): number {
    return this.plugins.size;
  }
}
