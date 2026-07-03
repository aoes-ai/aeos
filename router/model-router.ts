export interface Model {
  id: string;
  name: string;
  available: boolean;
}

export class ModelRouter {
  private models: Model[] = [];

  register(model: Model): void {
    this.models.push(model);
    console.log(`Model registered: ${model.name}`);
  }

  getAvailable(): Model[] {
    return this.models.filter((model) => model.available);
  }

  count(): number {
    return this.models.length;
  }

  choose(): Model | undefined {
    return this.getAvailable()[0];
  }
}
