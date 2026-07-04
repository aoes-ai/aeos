export interface EngineeringGoal {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "running" | "completed";
}

export class EngineeringGoalFactory {
  create(title: string, description: string): EngineeringGoal {
    return {
      id: `goal-${Date.now()}`,
      title,
      description,
      priority: "high",
      status: "pending",
    };
  }
}
