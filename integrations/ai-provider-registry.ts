import { AIService } from "../models/ai-service";

export class AIProviderRegistry {
  private providers = new Map<string, AIService>();

  register(provider: AIService): void {
    this.providers.set(provider.id, provider);
    console.log(`Provider registered: ${provider.name}`);
  }

  get(id: string): AIService | undefined {
    return this.providers.get(id);
  }

  list(): AIService[] {
    return Array.from(this.providers.values());
  }

  has(id: string): boolean {
    return this.providers.has(id);
  }

  count(): number {
    return this.providers.size;
  }
}
