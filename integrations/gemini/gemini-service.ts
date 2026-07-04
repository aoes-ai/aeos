import "dotenv/config";

import { AIService, AIRequest, AIResponse } from "../../models/ai-service";

import { GeminiClient } from "./gemini-client";

export class GeminiService implements AIService {
  id = "gemini";
  name = "Google Gemini";

  private client = new GeminiClient();

  async initialize(): Promise<void> {
    console.log("Gemini Service initialized");
  }

  async isAvailable(): Promise<boolean> {
    console.log(
      "Gemini Key:",
      process.env.GEMINI_API_KEY ? "FOUND" : "NOT FOUND"
    );

    return !!process.env.GEMINI_API_KEY;
  }

  async generate(request: AIRequest): Promise<AIResponse> {
    const text = await this.client.generate(request.prompt);

    return {
      success: true,
      model: "gemini-2.5-flash",
      text,
    };
  }
}
