type MockResponse = {
  status: number | ((...args: any[]) => number);
  response: any | ((...args: any[]) => any);
};

export type BaseMock = Record<string, MockResponse>;
