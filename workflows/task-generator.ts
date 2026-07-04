export interface GeneratedTask {
  id: string;
  title: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
}

export class TaskGenerator {
  generate(goal: string): GeneratedTask[] {
    return [
      {
        id: "analyze",
        title: `Analyze goal: ${goal}`,
        priority: "high",
        completed: false,
      },
      {
        id: "plan",
        title: "Create implementation plan",
        priority: "high",
        completed: false,
      },
      {
        id: "implement",
        title: "Implement solution",
        priority: "high",
        completed: false,
      },
      {
        id: "verify",
        title: "Verify implementation",
        priority: "medium",
        completed: false,
      },
    ];
  }
}
