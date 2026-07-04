import { AIManager } from "../../models/ai-manager";
import { AIService } from "../../models/ai-service";

export class ProviderRegistry {
  private providers = new Map<string, AIService>();

  constructor(private aiManager: AIManager) {}

  register(provider: AIService): void {
    this.providers.set(provider.name.toLowerCase(), provider);
    this.aiManager.register(provider);

    console.log(`Provider registered: ${provider.name}`);
  }

  has(name: string): boolean {
    return this.providers.has(name.toLowerCase());
  }

  get(name: string): AIService | undefined {
    return this.providers.get(name.toLowerCase());
  }

  list(): AIService[] {
    return [...this.providers.values()];
  }

  count(): number {
    return this.providers.size;
  }
}
