export type HealthStatus = "healthy" | "warning" | "error";

export interface HealthCheck {
  id: string;
  name: string;
  status: HealthStatus;
  message?: string;
}

export class HealthMonitor {
  private checks: Map<string, HealthCheck> = new Map();

  register(check: HealthCheck): void {
    this.checks.set(check.id, check);
    console.log(`Health check registered: ${check.name}`);
  }

  update(id: string, status: HealthStatus, message?: string): void {
    const check = this.checks.get(id);

    if (!check) {
      throw new Error(`Health check not found: ${id}`);
    }

    check.status = status;
    check.message = message;
  }

  get(id: string): HealthCheck | undefined {
    return this.checks.get(id);
  }

  list(): HealthCheck[] {
    return Array.from(this.checks.values());
  }

  count(): number {
    return this.checks.size;
  }

  overallStatus(): HealthStatus {
    const values = this.list();

    if (values.some((v) => v.status === "error")) {
      return "error";
    }

    if (values.some((v) => v.status === "warning")) {
      return "warning";
    }

    return "healthy";
  }
}
