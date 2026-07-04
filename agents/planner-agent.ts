import { BaseAgent } from "./base-agent";
import { Goal } from "../models/goal";

export class PlannerAgent extends BaseAgent {
  id = "planner";
  name = "Planner Agent";
  type = "planning";

  async plan(goal: Goal): Promise<string[]> {
    this.start();

    console.log("");
    console.log("========== PLANNER ==========");
    console.log(`Goal: ${goal.title}`);

    const tasks = [
      "Analyze requirements",
      "Design architecture",
      "Generate implementation plan",
      "Review dependencies",
      "Prepare execution",
    ];

    this.stop();

    return tasks;
  }
}
