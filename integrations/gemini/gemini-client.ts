import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

export class GeminiClient {
  private ai: GoogleGenAI;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("GEMINI_API_KEY not found.");
    }

    this.ai = new GoogleGenAI({
      apiKey,
    });
  }

  async generate(prompt: string): Promise<string> {
    const response = await this.ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text ?? "";
  }
}
