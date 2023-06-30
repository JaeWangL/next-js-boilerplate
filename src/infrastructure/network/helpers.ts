/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return */
import { compile } from 'path-to-regexp';

export const pathToUrl = (path: string, params: object = {}): string =>
  compile(path, { encode: encodeURIComponent })(params);
