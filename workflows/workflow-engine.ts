export interface Workflow {
  id: string;
  name: string;
  tasks: string[];
}

export class WorkflowEngine {
  private workflows: Workflow[] = [];

  register(workflow: Workflow): void {
    this.workflows.push(workflow);
    console.log(`Workflow registered: ${workflow.name}`);
  }

  list(): Workflow[] {
    return this.workflows;
  }

  count(): number {
    return this.workflows.length;
  }
}
