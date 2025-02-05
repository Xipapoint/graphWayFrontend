module.exports = {
  graphWay: {
    output: {
      mode: 'tags-split',
      client: 'fetch',
      target: 'src/shared/api/endpoints.ts',
      schemas: 'src/shared/api/model',
      override: {
        mutator: {
          path: 'src/shared/api/customInstance.ts',
          name: 'customInstance',
        },
      },
    },
    input: {
      target: 'http://localhost:5000/api/docs-json',
    },
  },
};
