import { AgentManager } from "../agents/agent-manager";
import { TaskManager } from "../workflows/task-manager";
import { WorkflowEngine } from "../workflows/workflow-engine";
import { MemoryManager } from "../memory/memory-manager";
import { ModelRouter } from "../router/model-router";
import { PluginLoader } from "../plugins/plugin-loader";
import { ConfigManager } from "../configs/config-manager";
import { Logger } from "../scripts/logger";
import { Scheduler } from "./scheduler";
import { IntegrationManager } from "../integrations/integration-manager";
import { AIManager } from "../models/ai-manager";

export class AEOS {
  public agents = new AgentManager();
  public tasks = new TaskManager();
  public workflows = new WorkflowEngine();
  public memory = new MemoryManager();
  public router = new ModelRouter();
  public plugins = new PluginLoader();
  public config = new ConfigManager();
  public logger = new Logger();
  public scheduler = new Scheduler();
  public integrations = new IntegrationManager();
  public ai = new AIManager();

  async initialize(): Promise<void> {
    await this.memory.load();

    this.logger.info("AEOS initialized");
  }

  async shutdown(): Promise<void> {
    await this.memory.saveToDisk();

    this.scheduler.stop();

    this.logger.info("AEOS shutdown complete");
  }
}
