import { AIManager } from "./ai-manager";
import { AIRequest } from "./ai-service";

export class AITaskRunner {
  constructor(private aiManager: AIManager) {}

  async run(provider: string, prompt: string): Promise<string> {
    const request: AIRequest = {
      prompt,
    };

    const response = await this.aiManager.generate(provider, request);

    console.log("");
    console.log("========== AI RESPONSE ==========");
    console.log(response.text);
    console.log("=================================");

    return response.text;
  }
}
