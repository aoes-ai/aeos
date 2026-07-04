import { FileWriter } from "./file-writer";

export class ProjectEditor {
  constructor(private files = new FileWriter()) {}

  async createFile(file: string, content: string) {
    await this.files.write(file, content);
  }

  async replaceFile(file: string, content: string) {
    await this.files.write(file, content);
  }
}
