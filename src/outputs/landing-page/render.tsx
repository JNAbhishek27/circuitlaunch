import { mkdir, writeFile } from "node:fs/promises";
import { ElementsError, formatDiagnostics, render } from "@hyper-elements/react";
import LandingPage from "./LandingPage.js";

try {
  const { html, diagnostics } = await render(<LandingPage />);
  await mkdir("out", { recursive: true });
  await Promise.all([
    writeFile("out/landing-page.html", html),
    writeFile("out/index.html", html),
  ]);
  console.log(formatDiagnostics(diagnostics));
  console.log("Wrote out/index.html and out/landing-page.html");
} catch (error) {
  if (!(error instanceof ElementsError)) throw error;
  console.error(formatDiagnostics(error.diagnostics));
  process.exitCode = 1;
}
