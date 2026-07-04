import { ProviderRegistry } from "../packages/kernel/provider-registry";
import { MockAIService } from "../models/mock-ai-service";
import { GeminiService } from "./gemini/gemini-service";

export class ProviderManager {
  constructor(private registry: ProviderRegistry) {}

  async initialize() {
    const gemini = new GeminiService();

    if (await gemini.isAvailable()) {
      await gemini.initialize();
      this.registry.register(gemini);
    }

    const mock = new MockAIService();
    await mock.initialize();
    this.registry.register(mock);

    console.log(`Providers available: ${this.registry.count()}`);
  }
}
