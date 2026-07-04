export interface KnowledgeEntry {
  id: string;
  category: string;
  title: string;
  content: string;
  createdAt: number;
}

export class KnowledgeBase {
  private entries: KnowledgeEntry[] = [];

  add(entry: KnowledgeEntry): void {
    this.entries.push(entry);
  }

  find(category: string): KnowledgeEntry[] {
    return this.entries.filter((e) => e.category === category);
  }

  search(keyword: string): KnowledgeEntry[] {
    const term = keyword.toLowerCase();

    return this.entries.filter(
      (e) =>
        e.title.toLowerCase().includes(term) ||
        e.content.toLowerCase().includes(term)
    );
  }

  all(): KnowledgeEntry[] {
    return this.entries;
  }

  count(): number {
    return this.entries.length;
  }
}
