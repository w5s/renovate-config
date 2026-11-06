import { readFileSync } from 'node:fs';
import { describe, expect, test } from 'vitest';

import { getConfig } from '../node_modules/renovate/dist/config/defaults.js';
import { mergeChildConfig } from '../node_modules/renovate/dist/config/utils.js';
import { computeInternalChecksStatus } from '../node_modules/renovate/dist/workers/repository/update/branch/status-checks.js';
import { flattenUpdates } from '../node_modules/renovate/dist/workers/repository/updates/flatten.js';

const base = JSON.parse(readFileSync(new URL('../_base.json', import.meta.url), 'utf8'));
const security = JSON.parse(readFileSync(new URL('../preset/security.json', import.meta.url), 'utf8'));

describe('minimum release age', () => {
  test('exempts lockfile maintenance without exempting dependency updates', async () => {
    const config = mergeChildConfig(mergeChildConfig(getConfig(), security), base);
    config.semanticCommits = 'disabled';

    const updates = await flattenUpdates(config, {
      cargo: [{ deps: [], packageFile: 'Cargo.toml' }],
      npm: [{
        deps: [{
          currentValue: '1.0.0',
          datasource: 'npm',
          depName: 'example',
          packageName: 'example',
          updates: [['minor', '1.1.0'], ['major', '2.0.0']].map(([updateType, version]) => ({
            newValue: version,
            newVersion: version,
            releaseTimestamp: new Date().toISOString(),
            updateType,
          })),
        }],
        packageFile: 'package.json',
      }],
    });

    const maintenance = updates.filter((update) => update.updateType === 'lockFileMaintenance');
    expect(maintenance.map((update) => update.manager)).toEqual(expect.arrayContaining(['cargo', 'npm']));
    expect(maintenance).toHaveLength(2);
    await Promise.all(maintenance.map(async (update) => {
      expect(update.minimumReleaseAge).toBeNull();
      expect(await computeInternalChecksStatus({ upgrades: [update] })).toBeNull();
    }));

    await Promise.all([['minor', '2 days'], ['major', '7 days']].map(async ([type, age]) => {
      const update = updates.find((candidate) => candidate.updateType === type);
      expect(update.minimumReleaseAge).toBe(age);
      expect(await computeInternalChecksStatus({ upgrades: [update] })).toEqual({
        stabilityStatus: 'yellow',
      });
    }));
  });
});
