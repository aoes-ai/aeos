export interface AIRequest {
  prompt: string;
  context?: string;
}

export interface AIResponse {
  text: string;
  model: string;
  success: boolean;
}

export interface AIService {
  id: string;
  name: string;

  initialize(): Promise<void>;

  generate(request: AIRequest): Promise<AIResponse>;

  isAvailable(): Promise<boolean>;
}
