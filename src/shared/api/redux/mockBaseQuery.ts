import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { ZodSchema } from 'zod';

type TBaseQuery = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  { dataSchema?: ZodSchema },
  FetchBaseQueryMeta
>;

/**
 * HOF that wraps a base query function with additional functionality for data validation using zod
 *
 * @param baseQuery The base query function to be wrapped.
 * @returns A modified version of the baseQuery with added data validation.
 */
const baseQueryWithZodValidation: (baseQuery: TBaseQuery) => TBaseQuery =
  (baseQuery: TBaseQuery) => async (args, api, extraOptions) => {
    const returnValue = await baseQuery(args, api, extraOptions);

    const zodSchema = extraOptions?.dataSchema;

    const { data } = returnValue;

    if (data && zodSchema) {
      try {
        zodSchema.parse(data);
      } catch (error) {
        throw error;
      }
    }

    return returnValue;
  };

const baseQuery = fetchBaseQuery({ baseUrl: 'localhost:5000/' });
export const emptySplitApi = createApi({
  baseQuery: baseQueryWithZodValidation(baseQuery),
  endpoints: () => ({}),
});
