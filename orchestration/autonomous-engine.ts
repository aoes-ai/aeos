import { Goal } from "../models/goal";
import { PlannerAgent } from "../agents/planner-agent";
import { AIEngineeringAgent } from "../agents/ai-engineering-agent";
import { ProjectEditor } from "../tools/project-editor";

export class AutonomousEngine {
  constructor(
    private planner: PlannerAgent,
    private engineer: AIEngineeringAgent,
    private editor: ProjectEditor
  ) {}

  async execute(goal: Goal): Promise<void> {
    console.log("");
    console.log("========== AEOS AUTONOMOUS ENGINE ==========");

    const tasks = await this.planner.plan(goal);

    for (const task of tasks) {
      console.log(`Running: ${task}`);

      const result = await this.engineer.execute(task);

      // Placeholder: later we'll parse structured AI output
      await this.editor.createFile(
        `generated/${task.replace(/\s+/g, "-").toLowerCase()}.md`,
        result
      );
    }

    console.log("Autonomous workflow completed.");
  }
}
