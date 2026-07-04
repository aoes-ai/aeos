import { AIManager } from "../models/ai-manager";
import { MemoryManager } from "../memory/memory-manager";
import { Logger } from "../scripts/logger";

export class AITaskRunner {
  constructor(
    private ai: AIManager,
    private memory: MemoryManager,
    private logger: Logger
  ) {}

  async run(serviceId: string, prompt: string): Promise<string> {
    this.logger.info(`Running AI task using ${serviceId}`);

    const response = await this.ai.generate(serviceId, {
      prompt,
    });

    this.memory.save({
      id: `memory-${Date.now()}`,
      key: "last-response",
      value: response.text,
    });

    await this.memory.saveToDisk();

    this.logger.info("AI task completed");

    return response.text;
  }
}
