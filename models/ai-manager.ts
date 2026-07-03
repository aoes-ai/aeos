import { AIService, AIRequest, AIResponse } from "./ai-service";

export class AIManager {
  private services: Map<string, AIService> = new Map();

  register(service: AIService): void {
    this.services.set(service.id, service);
    console.log(`AI service registered: ${service.name}`);
  }

  get(id: string): AIService | undefined {
    return this.services.get(id);
  }

  list(): AIService[] {
    return Array.from(this.services.values());
  }

  async generate(serviceId: string, request: AIRequest): Promise<AIResponse> {
    const service = this.services.get(serviceId);

    if (!service) {
      throw new Error(`AI service not found: ${serviceId}`);
    }

    return await service.generate(request);
  }

  count(): number {
    return this.services.size;
  }
}
