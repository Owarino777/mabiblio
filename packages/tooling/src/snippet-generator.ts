/**
 * Snippet Generator
 *
 * Generates HTML/CSS/JS snippets from component source files.
 * Used to keep documentation in sync with component source code.
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';

export interface SnippetConfig {
  componentName: string;
  sourcePath: string;
  outputPath: string;
}

export interface ComponentSnippets {
  html: string;
  css: string;
  js?: string;
}

/**
 * Read component files and extract snippets
 */
export function extractSnippets(config: SnippetConfig): ComponentSnippets {
  const { sourcePath, componentName } = config;

  const cssPath = join(sourcePath, `${componentName}.css`);
  const jsPath = join(sourcePath, 'index.ts');

  const css = existsSync(cssPath) ? readFileSync(cssPath, 'utf-8') : '';
  const js = existsSync(jsPath) ? readFileSync(jsPath, 'utf-8') : undefined;

  // HTML examples are typically in the component's README or a separate examples file
  const htmlPath = join(sourcePath, `${componentName}.html`);
  const html = existsSync(htmlPath) ? readFileSync(htmlPath, 'utf-8') : '';

  return { html, css, js };
}

/**
 * Write snippets to JSON file for documentation consumption
 */
export function writeSnippets(snippets: ComponentSnippets, outputPath: string): void {
  const json = JSON.stringify(snippets, null, 2);
  writeFileSync(outputPath, json, 'utf-8');
}

/**
 * Generate snippets for all components
 */
export function generateAllSnippets(
  componentsDir: string,
  outputDir: string,
  componentNames: string[]
): void {
  for (const name of componentNames) {
    const config: SnippetConfig = {
      componentName: name,
      sourcePath: join(componentsDir, name),
      outputPath: join(outputDir, `${name}.json`),
    };

    const snippets = extractSnippets(config);
    writeSnippets(snippets, config.outputPath);

    console.log(`Generated snippets for ${name}`);
  }
}

/**
 * Minify CSS (basic implementation)
 */
export function minifyCSS(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .replace(/\s*([{:;}])\s*/g, '$1') // Remove space around special chars
    .trim();
}

/**
 * Calculate approximate gzip size
 * Note: This is a rough estimate, actual gzip compression may differ
 */
export function estimateGzipSize(content: string): number {
  // Rough estimate: gzip typically achieves 70-90% compression on CSS/JS
  const minified = content.replace(/\s+/g, ' ').trim();
  return Math.round(minified.length * 0.3);
}
