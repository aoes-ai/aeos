import { Goal } from "../models/goal";
import { PlannerAgent } from "../agents/planner-agent";
import { EngineeringAgent } from "../agents/engineering-agent";

export class TaskOrchestrator {
  constructor(
    private planner: PlannerAgent,
    private engineer: EngineeringAgent
  ) {}

  async execute(goal: Goal): Promise<void> {
    const tasks = await this.planner.plan(goal);

    await this.engineer.execute(tasks);
  }
}
