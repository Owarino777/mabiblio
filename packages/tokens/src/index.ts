/**
 * Design Tokens - TypeScript Types
 *
 * This module provides TypeScript types for the design tokens.
 * The actual values are in CSS custom properties (tokens.css).
 */

// Color tokens
export type ColorToken =
  // Semantic colors
  | 'primary'
  | 'primary-hover'
  | 'primary-active'
  | 'secondary'
  | 'secondary-hover'
  | 'secondary-active'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  // Surface colors
  | 'background'
  | 'surface'
  | 'surface-hover'
  | 'surface-active'
  // Text colors
  | 'text-primary'
  | 'text-secondary'
  | 'text-disabled'
  | 'on-primary'
  | 'on-secondary'
  // Border colors
  | 'border'
  | 'border-hover'
  | 'border-focus'
  // Focus
  | 'focus';

// Spacing tokens
export type SpaceToken =
  | 'xs'   // 4px
  | 'sm'   // 8px
  | 'md'   // 16px
  | 'lg'   // 24px
  | 'xl'   // 32px
  | '2xl'  // 48px
  | '3xl'; // 64px

// Typography tokens
export type FontSizeToken =
  | 'xs'   // 12px
  | 'sm'   // 14px
  | 'md'   // 16px
  | 'lg'   // 18px
  | 'xl'   // 20px
  | '2xl'  // 24px
  | '3xl'  // 30px
  | '4xl'; // 36px

export type FontWeightToken =
  | 'normal'    // 400
  | 'medium'    // 500
  | 'semibold'  // 600
  | 'bold';     // 700

export type LineHeightToken =
  | 'tight'     // 1.25
  | 'normal'    // 1.5
  | 'relaxed';  // 1.75

// Radius tokens
export type RadiusToken =
  | 'none'  // 0
  | 'sm'    // 4px
  | 'md'    // 8px
  | 'lg'    // 12px
  | 'xl'    // 16px
  | 'full'; // 9999px

// Shadow tokens
export type ShadowToken =
  | 'none'
  | 'sm'
  | 'md'
  | 'lg';

// Z-index tokens
export type ZIndexToken =
  | 'dropdown'
  | 'sticky'
  | 'modal'
  | 'popover'
  | 'tooltip';

// Transition tokens
export type TransitionToken =
  | 'fast'   // 150ms
  | 'normal' // 250ms
  | 'slow';  // 400ms

/**
 * Helper to get CSS variable name from token
 */
export function getCSSVar(category: string, token: string): string {
  return `var(--${category}-${token})`;
}

/**
 * Token categories for documentation
 */
export const TOKEN_CATEGORIES = [
  'color',
  'space',
  'font-size',
  'font-weight',
  'line-height',
  'radius',
  'shadow',
  'z',
  'transition',
] as const;

export type TokenCategory = (typeof TOKEN_CATEGORIES)[number];
