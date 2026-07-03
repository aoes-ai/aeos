import { AgentManager } from "../agents/agent-manager";
import { TaskManager } from "../workflows/task-manager";
import { WorkflowEngine } from "../workflows/workflow-engine";
import { MemoryManager } from "../memory/memory-manager";
import { ModelRouter } from "../router/model-router";

async function main() {
  const agents = new AgentManager();
  const tasks = new TaskManager();
  const workflows = new WorkflowEngine();
  const memory = new MemoryManager();
  const router = new ModelRouter();

  await memory.load();

  agents.register({
    id: "core-001",
    name: "AEOS Core",
    type: "system",
    status: "idle",
  });

  tasks.add({
    id: "task-001",
    title: "Initialize AEOS",
    status: "pending",
  });

  workflows.register({
    id: "workflow-001",
    name: "System Startup",
    tasks: ["task-001"],
  });

  memory.save({
    id: "memory-001",
    key: "startup",
    value: "AEOS initialized successfully",
  });

  await memory.saveToDisk();

  router.register({
    id: "model-001",
    name: "Gemini",
    available: true,
  });

  console.log("=================================");
  console.log("AEOS v0.1.0");
  console.log("=================================");

  console.log(`Agents: ${agents.count()}`);
  console.log(`Tasks: ${tasks.count()}`);
  console.log(`Workflows: ${workflows.count()}`);
  console.log(`Memory Records: ${memory.count()}`);
  console.log(`Models: ${router.count()}`);
}

main();
