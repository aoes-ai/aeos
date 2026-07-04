import { Goal } from "./goal";

export class GoalManager {
  private goals: Goal[] = [];

  create(title: string, description: string): Goal {
    const goal: Goal = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
    };

    this.goals.push(goal);

    console.log(`Goal created: ${title}`);

    return goal;
  }

  complete(goal: Goal): void {
    goal.completed = true;
    console.log(`Goal completed: ${goal.title}`);
  }

  list(): Goal[] {
    return this.goals;
  }
}
