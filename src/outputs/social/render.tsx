import { mkdir, writeFile } from "node:fs/promises";
import { ElementsError, formatDiagnostics } from "@hyper-elements/react";
import { renderImage } from "@hyper-elements/react/image";
import SocialCard from "./SocialCard.js";

try {
  const { image, width, height, diagnostics } = await renderImage(<SocialCard />);
  await mkdir("out", { recursive: true });
  await writeFile("out/pulsenode-edge-launch.png", image);
  console.log(formatDiagnostics(diagnostics));
  console.log(`Wrote out/pulsenode-edge-launch.png (${width} × ${height})`);
} catch (error) {
  if (!(error instanceof ElementsError)) throw error;
  console.error(formatDiagnostics(error.diagnostics));
  process.exitCode = 1;
}
