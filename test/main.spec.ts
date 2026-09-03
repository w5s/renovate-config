import { describe, expect, test } from 'vitest';

import baseJSON from '../_base.json' with { type: 'json' };
import defaultJSON from '../default.json' with { type: 'json' };

describe('Configuration snapshot', () => {
  test('_base.json', () => {
    expect(baseJSON).toMatchSnapshot();
  });
  test('default.json', () => {
    expect(defaultJSON).toMatchSnapshot();
  });
});
