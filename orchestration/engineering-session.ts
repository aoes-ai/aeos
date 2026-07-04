import { ContextManager } from "../memory/system-context";
import { EngineeringPipeline } from "./engineering-pipeline";

export class EngineeringSession {
  constructor(
    private context: ContextManager,
    private pipeline: EngineeringPipeline
  ) {}

  start(goal: string) {
    this.context.update({
      currentGoal: goal,
    });

    console.log("=================================");
    console.log("Engineering Session Started");
    console.log("=================================");

    return this.pipeline.run(goal);
  }

  finish() {
    console.log("Engineering Session Finished");
  }
}
