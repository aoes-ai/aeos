import { Goal } from "../models/goal";
import { EngineeringPipeline } from "./engineering-pipeline";

export class GoalExecutor {
  constructor(private pipeline: EngineeringPipeline) {}

  async execute(goal: Goal): Promise<void> {
    console.log("");
    console.log("=================================");
    console.log(`Executing Goal: ${goal.title}`);
    console.log("=================================");

    await this.pipeline.execute(goal);

    console.log("");
    console.log("Goal execution completed.");
  }
}
