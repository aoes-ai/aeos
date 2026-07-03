export type LogLevel = "info" | "warn" | "error" | "debug";

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: number;
  context?: any;
}

export class Logger {
  private logs: LogEntry[] = [];

  private write(level: LogLevel, message: string, context?: any): void {
    const entry: LogEntry = {
      level,
      message,
      timestamp: Date.now(),
      context,
    };

    this.logs.push(entry);

    console.log(`[${level.toUpperCase()}] ${message}`);
  }

  info(message: string, context?: any): void {
    this.write("info", message, context);
  }

  warn(message: string, context?: any): void {
    this.write("warn", message, context);
  }

  error(message: string, context?: any): void {
    this.write("error", message, context);
  }

  debug(message: string, context?: any): void {
    this.write("debug", message, context);
  }

  getAll(): LogEntry[] {
    return this.logs;
  }

  count(): number {
    return this.logs.length;
  }
}
