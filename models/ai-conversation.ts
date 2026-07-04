export interface ConversationMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export class AIConversation {
  private messages: ConversationMessage[] = [];

  add(role: ConversationMessage["role"], content: string) {
    this.messages.push({
      role,
      content,
    });
  }

  history() {
    return this.messages;
  }

  clear() {
    this.messages = [];
  }

  count() {
    return this.messages.length;
  }
}
