export interface Decision {
  action: string;
  reason: string;
}

export class DecisionEngine {
  decide(goal: string): Decision {
    const text = goal.toLowerCase();

    if (text.includes("analyze")) {
      return {
        action: "project-analysis",
        reason: "Goal requests analysis",
      };
    }

    if (text.includes("build")) {
      return {
        action: "implementation",
        reason: "Goal requests implementation",
      };
    }

    return {
      action: "planning",
      reason: "Default planning workflow",
    };
  }
}
