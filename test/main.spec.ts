import { describe, expect, test } from 'vitest';

import baseJSON from '../_base.json' with { type: 'json' };
import applicationJSON from '../application.json' with { type: 'json' };
import libraryJSON from '../library.json' with { type: 'json' };

describe('Configuration snapshot', () => {
  test('_base.json', () => {
    expect(baseJSON).toMatchSnapshot();
  });
  test('application.json', () => {
    expect(applicationJSON).toMatchSnapshot();
  });
  test('library.json', () => {
    expect(libraryJSON).toMatchSnapshot();
  });
});
