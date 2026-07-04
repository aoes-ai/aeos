import { AgentManager } from "../agents/agent-manager";
import { PlannerAgent } from "../agents/planner-agent";
import { EngineeringAgent } from "../agents/engineering-agent";

export class Kernel {
  constructor(private agents: AgentManager) {}

  async initialize(): Promise<void> {
    this.agents.register(new PlannerAgent());
    this.agents.register(new EngineeringAgent());

    console.log("Kernel initialized");
    console.log(`Agents loaded: ${this.agents.count()}`);
  }
}
