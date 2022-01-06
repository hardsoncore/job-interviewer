import * as version from './git-version.json';

export const versionInfo = (() => {
  const dev = { tag: 'v0.0.0', hash: 'dev', raw: 'v0.0.0' };
  // if (!environment.production) return dev;

  try {
    return version;
  } catch {
    // In dev the file might not exist:
    return dev;
  }
})();
