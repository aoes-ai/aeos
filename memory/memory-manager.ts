import { promises as fs } from "fs";

export interface MemoryRecord {
  id: string;
  key: string;
  value: string;
}

export class MemoryManager {
  private records: MemoryRecord[] = [];
  private filePath = "memory-store.json";

  async load(): Promise<void> {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      this.records = JSON.parse(data);
      console.log("Memory loaded from disk");
    } catch {
      this.records = [];
      console.log("No existing memory found, starting fresh");
    }
  }

  async saveToDisk(): Promise<void> {
    await fs.writeFile(this.filePath, JSON.stringify(this.records, null, 2));
    console.log("Memory saved to disk");
  }

  save(record: MemoryRecord): void {
    this.records.push(record);
    console.log(`Memory saved: ${record.key}`);
  }

  get(key: string): MemoryRecord | undefined {
    return this.records.find((r) => r.key === key);
  }

  list(): MemoryRecord[] {
    return this.records;
  }

  count(): number {
    return this.records.length;
  }
}
