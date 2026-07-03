export interface Task {
  id: string;
  title: string;
  status: "pending" | "running" | "completed" | "failed";
}

export class TaskManager {
  private tasks: Task[] = [];

  add(task: Task): void {
    this.tasks.push(task);
    console.log(`Task added: ${task.title}`);
  }

  list(): Task[] {
    return this.tasks;
  }

  count(): number {
    return this.tasks.length;
  }
}
