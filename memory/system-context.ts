export interface SystemContext {
  projectName: string;
  version: string;
  currentGoal?: string;
  activeTasks: number;
  activeAgents: number;
  timestamp: number;
}

export class ContextManager {
  private context: SystemContext = {
    projectName: "AEOS",
    version: "0.3.0",
    activeTasks: 0,
    activeAgents: 0,
    timestamp: Date.now(),
  };

  get(): SystemContext {
    return this.context;
  }

  update(values: Partial<SystemContext>): void {
    this.context = {
      ...this.context,
      ...values,
      timestamp: Date.now(),
    };
  }
}
