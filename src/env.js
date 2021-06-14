import { throw_missing_env } from '@ctx-core/env';
const SESSION_KEY = process.env.SESSION_KEY
    || throw_missing_env('SESSION_KEY');
export { SESSION_KEY };
//# sourceMappingURL=src/env.js.map