import { describe, it, expect } from 'vitest';
import {
  getButtonClasses,
  getButtonHTML,
  getIconButtonHTML,
  BUTTON_VARIANTS,
  BUTTON_SIZES,
} from '../index';

describe('Button', () => {
  describe('getButtonClasses', () => {
    it('should return primary variant by default', () => {
      const classes = getButtonClasses();
      expect(classes).toContain('auk-btn--primary');
      expect(classes).toContain('auk-btn');
    });

    it('should return correct variant classes', () => {
      expect(getButtonClasses({ variant: 'primary' })).toContain('auk-btn--primary');
      expect(getButtonClasses({ variant: 'secondary' })).toContain('auk-btn--secondary');
      expect(getButtonClasses({ variant: 'tertiary' })).toContain('auk-btn--tertiary');
    });

    it('should return correct size classes', () => {
      expect(getButtonClasses({ size: 'sm' })).toContain('auk-btn--sm');
      expect(getButtonClasses({ size: 'md' })).toContain('auk-btn--md');
      expect(getButtonClasses({ size: 'lg' })).toContain('auk-btn--lg');
    });

    it('should add disabled class when disabled', () => {
      const classes = getButtonClasses({ disabled: true });
      expect(classes).toContain('auk-btn--disabled');
    });

    it('should add loading class when loading', () => {
      const classes = getButtonClasses({ loading: true });
      expect(classes).toContain('auk-btn--loading');
    });

    it('should add icon-only class when iconOnly', () => {
      const classes = getButtonClasses({ iconOnly: true });
      expect(classes).toContain('auk-btn--icon-only');
    });

    it('should combine multiple options', () => {
      const classes = getButtonClasses({
        variant: 'secondary',
        size: 'lg',
        disabled: true,
      });
      expect(classes).toContain('auk-btn--secondary');
      expect(classes).toContain('auk-btn--lg');
      expect(classes).toContain('auk-btn--disabled');
    });
  });

  describe('getButtonHTML', () => {
    it('should generate valid button HTML', () => {
      const html = getButtonHTML('Click me');
      expect(html).toContain('<button');
      expect(html).toContain('type="button"');
      expect(html).toContain('Click me');
      expect(html).toContain('</button>');
    });

    it('should set button type correctly', () => {
      const submit = getButtonHTML('Submit', { type: 'submit' });
      expect(submit).toContain('type="submit"');

      const reset = getButtonHTML('Reset', { type: 'reset' });
      expect(reset).toContain('type="reset"');
    });

    it('should add disabled attributes when disabled', () => {
      const html = getButtonHTML('Disabled', { disabled: true });
      expect(html).toContain('disabled');
      expect(html).toContain('aria-disabled="true"');
    });

    it('should add aria-busy when loading', () => {
      const html = getButtonHTML('Loading', { loading: true });
      expect(html).toContain('aria-busy="true"');
      expect(html).toContain('auk-btn__spinner');
    });
  });

  describe('getIconButtonHTML', () => {
    it('should generate icon button with aria-label', () => {
      const html = getIconButtonHTML('<svg></svg>', 'Close');
      expect(html).toContain('aria-label="Close"');
      expect(html).toContain('<svg></svg>');
      expect(html).toContain('auk-btn--icon-only');
    });

    it('should include disabled attribute when disabled', () => {
      const html = getIconButtonHTML('<svg></svg>', 'Close', { disabled: true });
      expect(html).toContain('disabled');
    });
  });

  describe('BUTTON_VARIANTS', () => {
    it('should have all expected variants', () => {
      expect(BUTTON_VARIANTS.primary).toBeDefined();
      expect(BUTTON_VARIANTS.secondary).toBeDefined();
      expect(BUTTON_VARIANTS.tertiary).toBeDefined();
    });
  });

  describe('BUTTON_SIZES', () => {
    it('should have all expected sizes', () => {
      expect(BUTTON_SIZES.sm).toBeDefined();
      expect(BUTTON_SIZES.md).toBeDefined();
      expect(BUTTON_SIZES.lg).toBeDefined();
    });
  });
});
