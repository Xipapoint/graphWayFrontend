import { emptySplitApi as api } from '../mockBaseQuery';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSessionTypes: build.query<
      GetSessionTypesApiResponse,
      GetSessionTypesApiArg
    >({
      query: () => ({
        url: `/session-types/GET`,
      }),
    }),
    postSessionTypes: build.mutation<
      PostSessionTypesApiResponse,
      PostSessionTypesApiArg
    >({
      query: (queryArg: PostSessionTypesApiArg) => ({
        url: `/session-types/POST`,
        method: 'POST',
        body: queryArg.newSessionType,
      }),
    }),
    getSessionTypesById: build.query<
      GetSessionTypesByIdApiResponse,
      GetSessionTypesByIdApiArg
    >({
      query: (queryArg) => ({ url: `/session-types/${queryArg.id}` }),
    }),
    putSessionTypesById: build.mutation<
      PutSessionTypesByIdApiResponse,
      PutSessionTypesByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/session-types/${queryArg.id}/PUT`,
        method: 'PUT',
        body: queryArg.updateSessionType,
      }),
    }),
    deleteSessionTypesById: build.mutation<
      DeleteSessionTypesByIdApiResponse,
      DeleteSessionTypesByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/session-types/${queryArg.id}/`,
        method: 'DELETE',
      }),
    }),
    getAlgorithms: build.query<GetAlgorithmsApiResponse, GetAlgorithmsApiArg>({
      query: () => ({ url: `/algorithms` }),
    }),
    postAlgorithms: build.mutation<
      PostAlgorithmsApiResponse,
      PostAlgorithmsApiArg
    >({
      query: (queryArg) => ({
        url: `/algorithms`,
        method: 'POST',
        body: queryArg.newAlgorithm,
      }),
    }),
    getAlgorithmsById: build.query<
      GetAlgorithmsByIdApiResponse,
      GetAlgorithmsByIdApiArg
    >({
      query: (queryArg) => ({ url: `/algorithms/${queryArg.id}` }),
    }),
    putAlgorithmsById: build.mutation<
      PutAlgorithmsByIdApiResponse,
      PutAlgorithmsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/algorithms/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.updateAlgorithm,
      }),
    }),
    deleteAlgorithmsById: build.mutation<
      DeleteAlgorithmsByIdApiResponse,
      DeleteAlgorithmsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/algorithms/${queryArg.id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as SessionEndpoints };
export type GetSessionTypesApiResponse =
  /** status 200 A list of session types */ SessionType[];
export type GetSessionTypesApiArg = void;
export type PostSessionTypesApiResponse =
  /** status 201 Session type created */ SessionType;
export type PostSessionTypesApiArg = {
  newSessionType: NewSessionType;
};
export type GetSessionTypesByIdApiResponse =
  /** status 200 Session type details */ SessionType;
export type GetSessionTypesByIdApiArg = {
  /** ID of the session type to retrieve */
  id: number;
};
export type PutSessionTypesByIdApiResponse =
  /** status 200 Updated session type */ SessionType;
export type PutSessionTypesByIdApiArg = {
  /** ID of the session type to update */
  id: number;
  updateSessionType: UpdateSessionType;
};
export type DeleteSessionTypesByIdApiResponse = unknown;
export type DeleteSessionTypesByIdApiArg = {
  /** ID of the session type to delete */
  id: number;
};
export type GetAlgorithmsApiResponse =
  /** status 200 A list of algorithms */ Algorithm[];
export type GetAlgorithmsApiArg = void;
export type PostAlgorithmsApiResponse =
  /** status 201 Algorithm created */ Algorithm;
export type PostAlgorithmsApiArg = {
  newAlgorithm: NewAlgorithm;
};
export type GetAlgorithmsByIdApiResponse =
  /** status 200 Algorithm details */ Algorithm;
export type GetAlgorithmsByIdApiArg = {
  /** ID of the algorithm to retrieve */
  id: number;
};
export type PutAlgorithmsByIdApiResponse =
  /** status 200 Updated algorithm */ Algorithm;
export type PutAlgorithmsByIdApiArg = {
  /** ID of the algorithm to update */
  id: number;
  updateAlgorithm: UpdateAlgorithm;
};
export type DeleteAlgorithmsByIdApiResponse = unknown;
export type DeleteAlgorithmsByIdApiArg = {
  /** ID of the algorithm to delete */
  id: number;
};
export type SessionType = {
  id: number;
  name: string;
  description: string;
  imagePath: string;
};
export type NewSessionType = {
  name: string;
  description: string;
  imagePath: string;
};
export type ErrorResponse = {
  message: string;
};
export type UpdateSessionType = {
  name?: string;
  description?: string;
  imagePath?: string;
};
export type Algorithm = {
  id: number;
  name: string;
  description: string;
  imagePath: string;
};
export type NewAlgorithm = {
  name: string;
  description: string;
  imagePath: string;
};
export type UpdateAlgorithm = {
  name?: string;
  description?: string;
  imagePath?: string;
};
export const {
  useGetSessionTypesQuery,
  usePostSessionTypesMutation,
  useGetSessionTypesByIdQuery,
  usePutSessionTypesByIdMutation,
  useDeleteSessionTypesByIdMutation,
  useGetAlgorithmsQuery,
  usePostAlgorithmsMutation,
  useGetAlgorithmsByIdQuery,
  usePutAlgorithmsByIdMutation,
  useDeleteAlgorithmsByIdMutation,
} = injectedRtkApi;
