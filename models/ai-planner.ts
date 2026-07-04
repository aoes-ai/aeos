export interface PlanStep {
  id: string;
  title: string;
  completed: boolean;
}

export class AIPlanner {
  create(goal: string): PlanStep[] {
    return [
      {
        id: "1",
        title: `Analyze: ${goal}`,
        completed: false,
      },
      {
        id: "2",
        title: "Generate implementation",
        completed: false,
      },
      {
        id: "3",
        title: "Validate result",
        completed: false,
      },
    ];
  }

  complete(stepId: string, steps: PlanStep[]): void {
    const step = steps.find((s) => s.id === stepId);

    if (step) {
      step.completed = true;
    }
  }
}
