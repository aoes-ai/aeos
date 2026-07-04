import { GoalExecutor } from "./goal-executor";
import { EngineeringPipeline } from "./engineering-pipeline";
import { DecisionEngine } from "./decision-engine";

export class ExecutionEngine {
  constructor(
    private decisions: DecisionEngine,
    private goals: GoalExecutor,
    private pipeline: EngineeringPipeline
  ) {}

  run(goal: string) {
    const decision = this.decisions.decide(goal);

    console.log("=================================");
    console.log("Execution Engine");
    console.log("=================================");

    console.log(`Decision: ${decision.action}`);
    console.log(`Reason: ${decision.reason}`);

    return this.pipeline.run(goal);
  }
}
