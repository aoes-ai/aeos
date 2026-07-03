export interface Agent {
  id: string;
  name: string;
  type: string;
  status: "idle" | "running" | "paused" | "failed";
}

export class AgentManager {
  private agents: Agent[] = [];

  register(agent: Agent): void {
    this.agents.push(agent);
    console.log(`Registered agent: ${agent.name}`);
  }

  list(): Agent[] {
    return this.agents;
  }

  count(): number {
    return this.agents.length;
  }
}
