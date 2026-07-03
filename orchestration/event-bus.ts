export type EventPayload = {
  type: string;
  data?: any;
  timestamp: number;
};

type Listener = (event: EventPayload) => void;

export class EventBus {
  private listeners: Map<string, Listener[]> = new Map();

  on(eventType: string, listener: Listener): void {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, []);
    }

    this.listeners.get(eventType)!.push(listener);
    console.log(`Listener registered for: ${eventType}`);
  }

  emit(eventType: string, data?: any): void {
    const event: EventPayload = {
      type: eventType,
      data,
      timestamp: Date.now(),
    };

    const listeners = this.listeners.get(eventType) || [];

    for (const listener of listeners) {
      listener(event);
    }
  }

  off(eventType: string): void {
    this.listeners.delete(eventType);
    console.log(`Listeners removed for: ${eventType}`);
  }

  count(eventType: string): number {
    return this.listeners.get(eventType)?.length || 0;
  }
}
