import { BaseAgent } from "./base-agent";
import { AITaskRunner } from "../models/ai-task-runner";

export class AIEngineeringAgent extends BaseAgent {
  id = "ai-engineering";
  name = "AI Engineering Agent";
  type = "engineering";

  constructor(private runner: AITaskRunner) {
    super();
  }

  async execute(task: string): Promise<string> {
    this.start();

    const result = await this.runner.run(
      "gemini",
      `
You are AEOS.

Complete this engineering task:

${task}

Return only the engineering solution.
`
    );

    this.stop();

    return result;
  }
}import { BaseAgent } from "./base-agent";
import { AITaskRunner } from "../models/ai-task-runner";

export class AIEngineeringAgent extends BaseAgent {
  id = "ai-engineering";
  name = "AI Engineering Agent";
  type = "engineering";

  constructor(private runner: AITaskRunner) {
    super();
  }

  async execute(task: string): Promise<string> {
    this.start();

    const result = await this.runner.run(
      "gemini",
      `
You are AEOS.

Complete this engineering task:

${task}

Return only the engineering solution.
`
    );

    this.stop();

    return result;
  }
}
