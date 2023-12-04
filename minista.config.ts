import 'dotenv/config';

import { defineConfig } from 'minista';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGitHubPages ? '/kes-solution' : '',
});
