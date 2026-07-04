export interface Goal {
  id: string;
  title: string;
  status: "pending" | "running" | "completed" | "failed";
  createdAt: number;
}

export class GoalManager {
  private goals: Goal[] = [];

  create(title: string): Goal {
    const goal: Goal = {
      id: `goal-${Date.now()}`,
      title,
      status: "pending",
      createdAt: Date.now(),
    };

    this.goals.push(goal);
    return goal;
  }

  updateStatus(id: string, status: Goal["status"]): void {
    const goal = this.goals.find((g) => g.id === id);
    if (goal) {
      goal.status = status;
    }
  }

  list(): Goal[] {
    return this.goals;
  }

  count(): number {
    return this.goals.length;
  }
}
