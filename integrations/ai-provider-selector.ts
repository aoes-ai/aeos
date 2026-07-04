import { AIProviderRegistry } from "./ai-provider-registry";
import { AIService } from "../models/ai-service";

export class AIProviderSelector {
  constructor(private registry: AIProviderRegistry) {}

  select(preferred?: string): AIService {
    if (preferred) {
      const provider = this.registry.get(preferred);

      if (provider) {
        return provider;
      }
    }

    const providers = this.registry.list();

    if (providers.length === 0) {
      throw new Error("No AI providers registered.");
    }

    return providers[0];
  }
}
