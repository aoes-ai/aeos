import { Goal } from "../models/goal";
import { PlannerAgent } from "../agents/planner-agent";
import { AIEngineeringAgent } from "../agents/ai-engineering-agent";

export class EngineeringPipeline {
  constructor(
    private planner: PlannerAgent,
    private engineer: AIEngineeringAgent
  ) {}

  async execute(goal: Goal): Promise<void> {
    console.log("");
    console.log("========== ENGINEERING PIPELINE ==========");

    const tasks = await this.planner.plan(goal);

    for (const task of tasks) {
      await this.engineer.execute(task);
    }

    console.log("Pipeline complete.");
  }
}
