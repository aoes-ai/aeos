import { Agent } from "./agent-manager";

export abstract class BaseAgent implements Agent {
  abstract id: string;
  abstract name: string;
  abstract type: string;

  status: "idle" | "running" | "paused" | "failed" = "idle";

  async initialize(): Promise<void> {
    this.status = "idle";
  }

  protected start(): void {
    this.status = "running";
  }

  protected stop(): void {
    this.status = "idle";
  }

  protected fail(): void {
    this.status = "failed";
  }
}
