export interface Integration {
  id: string;
  name: string;
  type: "llm" | "tool" | "automation";
  enabled: boolean;

  init?: () => void;
  execute?: (input: any) => Promise<any> | any;
}
