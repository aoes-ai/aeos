import { Integration } from "./integration";

export class IntegrationManager {
  private integrations: Map<string, Integration> = new Map();

  register(integration: Integration): void {
    this.integrations.set(integration.id, integration);

    console.log(`Integration registered: ${integration.name}`);

    if (integration.enabled && integration.init) {
      integration.init();
    }
  }

  get(id: string): Integration | undefined {
    return this.integrations.get(id);
  }

  list(): Integration[] {
    return Array.from(this.integrations.values());
  }

  enable(id: string): void {
    const integration = this.integrations.get(id);
    if (integration) {
      integration.enabled = true;
      console.log(`Integration enabled: ${integration.name}`);
    }
  }

  disable(id: string): void {
    const integration = this.integrations.get(id);
    if (integration) {
      integration.enabled = false;
      console.log(`Integration disabled: ${integration.name}`);
    }
  }

  async run(id: string, input: any): Promise<any> {
    const integration = this.integrations.get(id);

    if (!integration || !integration.enabled || !integration.execute) {
      throw new Error(`Integration not available: ${id}`);
    }

    return await integration.execute(input);
  }

  count(): number {
    return this.integrations.size;
  }
}
