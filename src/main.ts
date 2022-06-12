#!/usr/bin/env node

import { Command } from "commander";
import { version } from "../package.json";
import { run } from "@/command";

const program = new Command();

program
  .name("blackbox")
  .description("Reads sensor data and posts it to the cloud-lada API")
  .version(`v${version}`);

program
  .command("run")
  .description("Start reading sensor data and posting it to the API")
  .requiredOption("--api-key <apiKey>", "The API key to use for authentication")
  .option(
    "--interval <interval>",
    "How frequently to post sensor data (in milliseconds)",
    "60000"
  )
  .option(
    "--overflow-file <overflowFile>",
    "An on-disk location to write sensor data when the API cannot be accessed",
    "overflow.json"
  )
  .option(
    "--endpoint <endpoint>",
    "The HTTP endpoint to post sensor data to",
    "https://lada.dsb.dev/ingest"
  )
  .action((options) => {
    run({
      interval: options.interval,
      endpoint: options.endpoint,
      apiKey: options.apiKey,
      overflowFile: options.overflowFile,
    });
  });

try {
  program.parse();
} catch ({ message }) {
  console.error(`Error: ${message}`);
  process.exit(1);
}
