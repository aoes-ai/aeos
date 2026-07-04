import { ExecutionEngine } from "../orchestration/execution-engine";

export class AEOSCLI {
  constructor(private engine: ExecutionEngine) {}

  async execute(args: string[]) {
    const command = args[0];

    switch (command) {
      case "analyze":
        return this.engine.run("Analyze current project");

      case "build":
        return this.engine.run("Build requested feature");

      case "plan":
        return this.engine.run("Create engineering plan");

      default:
        console.log(`
AEOS CLI

Commands:

  analyze
  build
  plan
`);
    }
  }
}
