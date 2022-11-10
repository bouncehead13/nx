#!/usr/bin/env node

import * as yargs from 'yargs';
import { createNxWorkspaceForReact } from './lib/cra-to-nx';

export * from './lib/cra-to-nx';

export const commandsObject = yargs
  .parserConfiguration({ 'strip-dashed': true })
  .option('e2e', {
    type: 'boolean',
    describe: 'Generate end-to-end tests with Cypress',
    default: false,
  })
  .option('vite', {
    type: 'boolean',
    describe: 'Use Vite and Vitest (instead of Webpack and Jest)',
    default: false,
  })
  .option('nxCloud', {
    type: 'boolean',
    describe: 'Setup Nx Cloud',
    default: true,
  })
  .help();

createNxWorkspaceForReact(commandsObject.argv).catch((e) => {
  console.log(e);
  process.exit(1);
});
