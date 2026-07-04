import { AIService, AIRequest, AIResponse } from "./ai-service";

export class MockAIService implements AIService {
  id = "mock-ai";
  name = "Mock AI";

  async initialize(): Promise<void> {
    console.log("Mock AI initialized");
  }

  async isAvailable(): Promise<boolean> {
    return true;
  }

  async generate(request: AIRequest): Promise<AIResponse> {
    return {
      success: true,
      model: this.name,
      text: `Mock response: ${request.prompt}`,
    };
  }
}
