export interface AEOSPlugin {
  id: string;
  name: string;
  version: string;

  initialize(): Promise<void>;

  shutdown?(): Promise<void>;
}
