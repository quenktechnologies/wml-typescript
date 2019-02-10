#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var docopt = require("docopt");
var path_1 = require("path");
var future_1 = require("@quenk/noni/lib/control/monad/future");
var cli_1 = require("./cli");
var args = docopt.docopt("\n\nUsage:\n  wml [options] <path>\n\nOptions:\n  -h --help            Show this screen.\n  --inputExtension ext The file extension used when reading files. [default: wml] \n  --extension ext      The file extension to use when writing files. [default: ts]\n  --version            Show version.\n", {
    version: require('../package.json').version
});
cli_1.execute(path_1.resolve(process.cwd(), args['<path>']), args)
    .fork(function (e) { return future_1.pure((console.error(e.stack ? e.stack : e), process.exit(255))); }, function () { return process.exit(0); });
//# sourceMappingURL=main.js.map