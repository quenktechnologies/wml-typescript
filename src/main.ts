#! /usr/bin/env node

import * as docopt from 'docopt';
import { resolve } from 'path';
import { pure } from '@quenk/noni/lib/control/monad/future';
import { execute } from './cli';

const args = docopt.docopt(`

Usage:
  wml [options] <path>

Options:
  -h --help            Show this screen.
  --inputExtension ext The file extension used when reading files. [default: wml] 
  --extension ext      The file extension to use when writing files. [default: ts]
  --version            Show version.
`, {
        version: require('../package.json').version
    });

execute(resolve(process.cwd(), args['<path>']), args)
    .fork(
        e => pure((console.error(e.stack ? e.stack : e), process.exit(255))),
        () => process.exit(0)
    );
