import { import_meta_env_, missing_env__throw } from 'ctx-core/env'
export const SESSION_KEY =
	import_meta_env_().SESSION_KEY
	|| missing_env__throw('SESSION_KEY')
