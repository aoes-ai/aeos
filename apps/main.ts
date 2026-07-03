import { AgentManager } from "../agents/agent-manager";

const manager = new AgentManager();

manager.register({
  id: "core-001",
  name: "AEOS Core",
  type: "system",
  status: "idle",
});

console.log(`AEOS started with ${manager.count()} agent(s).`);
