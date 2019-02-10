import {
    Future,
    toPromise,
    fromCallback
} from '@quenk/noni/lib/control/monad/future';
import { exec } from 'child_process';

const run =
    (cmd: string) => (args: string): Future<string> => fromCallback(cb =>
        exec(`${cmd} ${args} `, (err, text, etext) => {

            if (etext) {
                console.error(text, etext);
            }

            if (err) {

                console.error(err);
                return cb(err);

            }

            cb(undefined, text);

        }));

const mkdir = run('mkdir');
const cp = run('cp');
const rm = run('rm');
const tsc = run(`${__dirname}/../node_modules/.bin/tsc`);
const wmlc = run(`${__dirname}/../lib/main.js`);

describe('wmlc', () => {

    it('should compile files', () => {

        let wd = `${__dirname}/wmlx29`;
        let dest = `${wd}/sample`;
        let src = `${__dirname}/fixtures/sample`;

        return toPromise(
            rm(`-R ${dest} || true`)
                .chain(() => mkdir(`-p ${wd}`))
                .chain(() => cp(`-R ${src} ${dest}`))
                .chain(() => wmlc(dest))
                .chain(() => tsc(`--project ${dest}`))
                .chain(() => rm(` -R ${dest}`)));

    });

});
