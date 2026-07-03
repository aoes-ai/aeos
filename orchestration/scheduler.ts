export type ScheduledTask = {
  id: string;
  runAt: number;
  interval?: number; // optional repeating task (ms)
  action: () => void;
};

export class Scheduler {
  private tasks: Map<string, ScheduledTask> = new Map();
  private timer: any;

  start(): void {
    if (this.timer) return;

    this.timer = setInterval(() => {
      const now = Date.now();

      for (const task of this.tasks.values()) {
        if (now >= task.runAt) {
          try {
            task.action();

            // If repeating task
            if (task.interval) {
              task.runAt = now + task.interval;
            } else {
              this.tasks.delete(task.id);
            }
          } catch (err) {
            console.error(`Scheduler error in task ${task.id}`, err);
          }
        }
      }
    }, 500);

    console.log("Scheduler started");
  }

  stop(): void {
    clearInterval(this.timer);
    this.timer = null;
    console.log("Scheduler stopped");
  }

  schedule(task: ScheduledTask): void {
    this.tasks.set(task.id, task);
    console.log(`Task scheduled: ${task.id}`);
  }

  cancel(taskId: string): void {
    this.tasks.delete(taskId);
    console.log(`Task cancelled: ${taskId}`);
  }

  list(): ScheduledTask[] {
    return Array.from(this.tasks.values());
  }

  count(): number {
    return this.tasks.size;
  }
}
