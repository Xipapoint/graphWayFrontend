import { createApi } from '@reduxjs/toolkit/query/react';

import sessionAlgorithmsMocks from '../mocks/sessionAlgorithmMocks';
import sessionTypeMocks from '../mocks/sessionTypeMocks';
import { BaseMock } from '../mocks/TBaseMock';

type Query = { method: string; url: string; body: any };

const endpoints: Record<string, BaseMock> = {
  '/algorithms': sessionAlgorithmsMocks,
  '/session-types': sessionTypeMocks,
};

const getEndpoints = (url: string) => {
  return Object.entries(endpoints).find(([endpoint]) =>
    url.includes(endpoint),
  )?.[1];
};

const mockBaseQuery = async (args: Partial<Query>) => {
  console.log(args);
  const { url, body } = args;

  const mockKey = `${url}`;

  const mock = getEndpoints(mockKey);

  if (mock) {
    const endpoint = mock[mockKey];
    console.log(endpoint, mock, mockKey);

    const status =
      typeof endpoint.status === 'function'
        ? endpoint.status(body)
        : endpoint.status;
    const response =
      typeof endpoint.response === 'function'
        ? endpoint.response(body)
        : endpoint.response;

    if (status >= 200 && status < 300) {
      return { data: response };
    } else {
      return { error: { status, message: response || 'Error' } };
    }
  }

  return { error: { status: 404, message: 'Not Found' } };
};

export const emptySplitApi = createApi({
  baseQuery: mockBaseQuery,
  endpoints: () => ({}),
});
