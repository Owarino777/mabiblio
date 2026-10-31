/**
 * Button Component
 *
 * A fully accessible button component with multiple variants.
 *
 * Features:
 * - Primary, secondary, and tertiary variants
 * - Icon button support
 * - Loading state
 * - Full keyboard accessibility
 * - Visible focus indicators
 * - Respects reduced motion
 */

export interface ButtonOptions {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  iconOnly?: boolean;
}

/**
 * Button variant CSS class names
 */
export const BUTTON_VARIANTS = {
  primary: 'auk-btn auk-btn--primary',
  secondary: 'auk-btn auk-btn--secondary',
  tertiary: 'auk-btn auk-btn--tertiary',
} as const;

/**
 * Button size CSS class names
 */
export const BUTTON_SIZES = {
  sm: 'auk-btn--sm',
  md: 'auk-btn--md',
  lg: 'auk-btn--lg',
} as const;

/**
 * Generate button class names based on options
 */
export function getButtonClasses(options: ButtonOptions = {}): string {
  const { variant = 'primary', size = 'md', disabled, loading, iconOnly } = options;

  const classes = [BUTTON_VARIANTS[variant], BUTTON_SIZES[size]];

  if (disabled) classes.push('auk-btn--disabled');
  if (loading) classes.push('auk-btn--loading');
  if (iconOnly) classes.push('auk-btn--icon-only');

  return classes.join(' ');
}

/**
 * HTML template for a button
 */
export function getButtonHTML(
  text: string,
  options: ButtonOptions & { type?: 'button' | 'submit' | 'reset' } = {}
): string {
  const { type = 'button', disabled, loading } = options;
  const classes = getButtonClasses(options);

  const disabledAttr = disabled ? 'disabled' : '';
  const ariaDisabled = disabled ? 'aria-disabled="true"' : '';
  const ariaBusy = loading ? 'aria-busy="true"' : '';
  const accessibleLabel = loading
    ? `aria-label="${text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}"`
    : '';

  return `<button type="${type}" class="${classes}" ${disabledAttr} ${ariaDisabled} ${ariaBusy} ${accessibleLabel}>
  ${loading ? '<span class="auk-btn__spinner" aria-hidden="true"></span>' : ''}
  <span class="auk-btn__text">${text}</span>
</button>`;
}

/**
 * HTML template for an icon button
 */
export function getIconButtonHTML(
  iconHTML: string,
  accessibleLabel: string,
  options: ButtonOptions = {}
): string {
  const classes = getButtonClasses({ ...options, iconOnly: true });
  const { disabled } = options;

  const disabledAttr = disabled ? 'disabled' : '';

  return `<button type="button" class="${classes}" aria-label="${accessibleLabel}" ${disabledAttr}>
  ${iconHTML}
</button>`;
}
