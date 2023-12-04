import 'dotenv/config';

import { defineConfig } from 'minista';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  root: isGitHubPages ? '/kes-solution/' : '',
});
