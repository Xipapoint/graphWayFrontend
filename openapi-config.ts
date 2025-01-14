import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: './src/shared/api/mocks/test-api.json',
  apiFile: './src/shared/api/redux/mockBaseQuery.ts',
  apiImport: 'emptySplitApi',
  outputFile: './src/shared/api/redux/endpoints/sessionEndpoints.ts',
  exportName: 'SessionEndpoints',
  hooks: true,
};

export default config;
