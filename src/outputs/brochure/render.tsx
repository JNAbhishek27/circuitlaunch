import { mkdir, writeFile } from "node:fs/promises";
import { ElementsError, formatDiagnostics, render } from "@hyper-elements/react";
import { renderPdf } from "@hyper-elements/react/pdf";
import ProductBrochure from "./ProductBrochure.js";

try {
  const brochure = <ProductBrochure />;
  const { html, diagnostics } = await render(brochure);
  const { pdf, diagnostics: pdfDiagnostics } = await renderPdf(brochure);
  await mkdir("out", { recursive: true });
  await Promise.all([
    writeFile("out/product-brochure.html", html),
    writeFile("out/pulse-node-edge-brochure.pdf", pdf),
  ]);
  console.log(formatDiagnostics([...diagnostics, ...pdfDiagnostics]));
  console.log("Wrote out/product-brochure.html and out/pulse-node-edge-brochure.pdf");
} catch (error) {
  if (!(error instanceof ElementsError)) throw error;
  console.error(formatDiagnostics(error.diagnostics));
  process.exitCode = 1;
}
