export interface GeminiConfig {
  apiKey: string;
  model: string;
}

export const DefaultGeminiConfig: GeminiConfig = {
  apiKey: process.env.GEMINI_API_KEY || "",
  model: "gemini-2.5-flash",
};
