export interface Command {
  id: string;
  name: string;
  execute: (...args: any[]) => Promise<any> | any;
}

export class CommandExecutor {
  private commands: Map<string, Command> = new Map();

  register(command: Command): void {
    this.commands.set(command.id, command);
    console.log(`Command registered: ${command.name}`);
  }

  async run(id: string, ...args: any[]): Promise<any> {
    const command = this.commands.get(id);

    if (!command) {
      throw new Error(`Command not found: ${id}`);
    }

    return await command.execute(...args);
  }

  list(): Command[] {
    return Array.from(this.commands.values());
  }

  count(): number {
    return this.commands.size;
  }
}
