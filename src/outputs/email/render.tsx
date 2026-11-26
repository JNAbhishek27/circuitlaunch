import { mkdir, writeFile } from "node:fs/promises";
import { ElementsError, formatDiagnostics, render } from "@hyper-elements/react";
import LaunchEmail from "./LaunchEmail.js";

try {
  const { html, text, diagnostics } = await render(<LaunchEmail />);
  await mkdir("out", { recursive: true });
  await Promise.all([
    writeFile("out/launch-email.html", html),
    writeFile("out/launch-email.txt", text),
  ]);
  console.log(formatDiagnostics(diagnostics));
  console.log("Wrote out/launch-email.html and out/launch-email.txt");
} catch (error) {
  if (!(error instanceof ElementsError)) throw error;
  console.error(formatDiagnostics(error.diagnostics));
  process.exitCode = 1;
}
