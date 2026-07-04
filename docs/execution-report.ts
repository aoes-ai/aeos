export interface ExecutionReport {
  goal: string;
  success: boolean;
  startedAt: number;
  finishedAt: number;
  tasksCompleted: number;
  notes: string[];
}

export class ReportBuilder {
  create(goal: string): ExecutionReport {
    return {
      goal,
      success: false,
      startedAt: Date.now(),
      finishedAt: 0,
      tasksCompleted: 0,
      notes: [],
    };
  }

  finish(report: ExecutionReport): ExecutionReport {
    report.success = true;
    report.finishedAt = Date.now();
    return report;
  }
}
