import { AEOSApplication } from "./application";

async function main() {
  const app = new AEOSApplication();

  try {
    await app.start();

    console.log("");
    console.log("=================================");
    console.log("AEOS v0.4");
    console.log("=================================");
    console.log("System online.");
    console.log("Ready for engineering tasks.");

    await app.stop();
  } catch (error) {
    console.error(error);
  }
}

main();
