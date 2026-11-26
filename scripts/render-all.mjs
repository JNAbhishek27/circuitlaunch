import { spawnSync } from "node:child_process";
import { delimiter } from "node:path";

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const localBin = process.platform === "win32" ? "node_modules/.bin" : "node_modules/.bin";

const renderers = [
  "render:email",
  "render:landing",
  "render:brochure",
  "render:social",
];

let failed = false;

for (const script of renderers) {
  console.log(`\n=== ${script} ===`);
  const result = spawnSync(npmCommand, ["run", script], {
    stdio: "inherit",
    env: { ...process.env, PATH: `${localBin}${delimiter}${process.env.PATH ?? ""}` },
  });
  if (result.error) {
    console.error(`${script} could not start: ${result.error.message}`);
    failed = true;
  } else if (result.status !== 0) {
    console.error(`${script} failed with exit code ${result.status ?? "unknown"}`);
    failed = true;
  }
}

if (failed) process.exitCode = 1;
else console.log("\nAll four outputs rendered successfully.");
