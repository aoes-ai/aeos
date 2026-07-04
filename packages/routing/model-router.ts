import { AIManager } from "../../models/ai-manager";
import { AIRequest, AIResponse } from "../../models/ai-service";

export interface ModelRoute {
  provider: string;
  priority: number;
  enabled: boolean;
}

export class ModelRouter {
  private routes: ModelRoute[] = [
    { provider: "gemini-cli", priority: 100, enabled: true },
    { provider: "gemini", priority: 95, enabled: true },
    { provider: "groq", priority: 90, enabled: true },
    { provider: "deepseek", priority: 85, enabled: true },
    { provider: "openrouter", priority: 80, enabled: true },
    { provider: "ollama", priority: 70, enabled: true },
  ];

  constructor(private ai: AIManager) {}

  async generate(request: AIRequest): Promise<AIResponse> {
    for (const route of this.routes) {
      if (!route.enabled) continue;

      try {
        return await this.ai.generate(route.provider, request);
      } catch {}
    }

    throw new Error("No AI provider available.");
  }
}
