/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly WEB3FORMS_ACCESS_KEY: string;
  readonly PLAUSIBLE_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
