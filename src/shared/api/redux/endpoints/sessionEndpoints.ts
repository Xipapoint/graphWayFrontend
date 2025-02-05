import { emptySplitApi as api } from '../mockBaseQuery';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    appControllerGetHello: build.query<
      AppControllerGetHelloApiResponse,
      AppControllerGetHelloApiArg
    >({
      query: () => ({ url: `/` }),
    }),
    sessionModeControllerFindSessionModes: build.query<
      SessionModeControllerFindSessionModesApiResponse,
      SessionModeControllerFindSessionModesApiArg
    >({
      query: () => ({ url: `/session-modes/all` }),
    }),
    sessionModeControllerCreateSessionMode: build.mutation<
      SessionModeControllerCreateSessionModeApiResponse,
      SessionModeControllerCreateSessionModeApiArg
    >({
      query: (queryArg) => ({
        url: `/session-modes/create`,
        method: 'POST',
        body: queryArg.createSessionModeRequestDto,
      }),
    }),
    sessionStructureControllerFindSessionStructures: build.query<
      SessionStructureControllerFindSessionStructuresApiResponse,
      SessionStructureControllerFindSessionStructuresApiArg
    >({
      query: () => ({ url: `/session-structures/all` }),
    }),
    sessionStructureControllerCreateSessionStructure: build.mutation<
      SessionStructureControllerCreateSessionStructureApiResponse,
      SessionStructureControllerCreateSessionStructureApiArg
    >({
      query: (queryArg) => ({
        url: `/session-structures/create`,
        method: 'POST',
        body: queryArg.createSessionStructureRequestDto,
      }),
    }),
    sessionStructureControllerFindSessionAlgorithmsByStructureId: build.query<
      SessionStructureControllerFindSessionAlgorithmsByStructureIdApiResponse,
      SessionStructureControllerFindSessionAlgorithmsByStructureIdApiArg
    >({
      query: (queryArg) => ({
        url: `/session-structures/by-data-structure/${queryArg.dataStructureId}`,
      }),
    }),
    sessionDataStructureControllerFindSessionDataStructures: build.query<
      SessionDataStructureControllerFindSessionDataStructuresApiResponse,
      SessionDataStructureControllerFindSessionDataStructuresApiArg
    >({
      query: () => ({ url: `/session-data-structures/all` }),
    }),
    sessionDataStructureControllerCreateSessionDataStructure: build.mutation<
      SessionDataStructureControllerCreateSessionDataStructureApiResponse,
      SessionDataStructureControllerCreateSessionDataStructureApiArg
    >({
      query: (queryArg) => ({
        url: `/session-data-structures/create`,
        method: 'POST',
        body: queryArg.createSessionDataStructureRequestDto,
      }),
    }),
    sessionAlgorithmControllerFindSessionAlgorithms: build.query<
      SessionAlgorithmControllerFindSessionAlgorithmsApiResponse,
      SessionAlgorithmControllerFindSessionAlgorithmsApiArg
    >({
      query: () => ({ url: `/session-algorithms/all` }),
    }),
    sessionAlgorithmControllerCreateSessionAlgorithm: build.mutation<
      SessionAlgorithmControllerCreateSessionAlgorithmApiResponse,
      SessionAlgorithmControllerCreateSessionAlgorithmApiArg
    >({
      query: (queryArg) => ({
        url: `/session-algorithms/create`,
        method: 'POST',
        body: queryArg.createSessionAlgorithmRequestDto,
      }),
    }),
    sessionAlgorithmControllerFindSessionAlgorithmsByStructureId: build.query<
      SessionAlgorithmControllerFindSessionAlgorithmsByStructureIdApiResponse,
      SessionAlgorithmControllerFindSessionAlgorithmsByStructureIdApiArg
    >({
      query: (queryArg) => ({
        url: `/session-algorithms/by-structure/${queryArg.structureId}`,
      }),
    }),
    graphSessionControllerCreateGraphSession: build.mutation<
      GraphSessionControllerCreateGraphSessionApiResponse,
      GraphSessionControllerCreateGraphSessionApiArg
    >({
      query: (queryArg) => ({
        url: `/graph-sessions/create`,
        method: 'POST',
        body: queryArg.createGraphSessionRequestDto,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as SessionEndpoints };
export type AppControllerGetHelloApiResponse = unknown;
export type AppControllerGetHelloApiArg = void;
export type SessionModeControllerFindSessionModesApiResponse =
  /** status 200 The found session modes */ FindSessionModesResponseDto;
export type SessionModeControllerFindSessionModesApiArg = void;
export type SessionModeControllerCreateSessionModeApiResponse = unknown;
export type SessionModeControllerCreateSessionModeApiArg = {
  createSessionModeRequestDto: CreateSessionModeRequestDto;
};
export type SessionStructureControllerFindSessionStructuresApiResponse =
  /** status 200 The found session Structures */ FindSessionStructuresResponseDto;
export type SessionStructureControllerFindSessionStructuresApiArg = void;
export type SessionStructureControllerCreateSessionStructureApiResponse =
  unknown;
export type SessionStructureControllerCreateSessionStructureApiArg = {
  createSessionStructureRequestDto: CreateSessionStructureRequestDto;
};
export type SessionStructureControllerFindSessionAlgorithmsByStructureIdApiResponse =
  /** status 200 The found session structures by data structure ID */ SessionStructureDto[];
export type SessionStructureControllerFindSessionAlgorithmsByStructureIdApiArg =
  {
    dataStructureId: string;
  };
export type SessionDataStructureControllerFindSessionDataStructuresApiResponse =
  /** status 200 The found session DataStructures */ FindSessionDataStructuresResponseDto;
export type SessionDataStructureControllerFindSessionDataStructuresApiArg =
  void;
export type SessionDataStructureControllerCreateSessionDataStructureApiResponse =
  unknown;
export type SessionDataStructureControllerCreateSessionDataStructureApiArg = {
  createSessionDataStructureRequestDto: CreateSessionDataStructureRequestDto;
};
export type SessionAlgorithmControllerFindSessionAlgorithmsApiResponse =
  /** status 200 The found session algorithms */ FindSessionAlgorithmsResponseDto;
export type SessionAlgorithmControllerFindSessionAlgorithmsApiArg = void;
export type SessionAlgorithmControllerCreateSessionAlgorithmApiResponse =
  unknown;
export type SessionAlgorithmControllerCreateSessionAlgorithmApiArg = {
  createSessionAlgorithmRequestDto: CreateSessionAlgorithmRequestDto;
};
export type SessionAlgorithmControllerFindSessionAlgorithmsByStructureIdApiResponse =
  /** status 200 The found session algorithms by structure ID */ SessionAlgorithmDto[];
export type SessionAlgorithmControllerFindSessionAlgorithmsByStructureIdApiArg =
  {
    structureId: string;
  };
export type GraphSessionControllerCreateGraphSessionApiResponse = unknown;
export type GraphSessionControllerCreateGraphSessionApiArg = {
  createGraphSessionRequestDto: CreateGraphSessionRequestDto;
};
export type SessionModeDto = {
  /** The unique identifier of the session mode */
  id: string;
  /** The title of the session mode */
  title: string;
  /** The description of the session mode */
  description: string;
  /** The image associated with the session mode */
  image: Blob;
};
export type FindSessionModesResponseDto = {
  /** List of session modes */
  sessionModes: SessionModeDto[];
};
export type CreateSessionModeRequestDto = {
  title: string;
  description: string;
  /** Image file for the session mode */
  image: Blob;
};
export type SessionStructureDto = {
  /** The unique identifier of the session structure */
  id: string;
  /** The title of the session structure */
  title: string;
  /** The description of the session structure */
  description: string;
  /** The image associated with the session structure */
  image: Blob;
  /** The unique identifiers of the session Data Structures that are associated with the session Structure */
  sessionDataStructureIds: string[];
};
export type FindSessionStructuresResponseDto = {
  /** List of session modes */
  sessionStructures: SessionStructureDto[];
};
export type CreateSessionStructureRequestDto = {
  title: string;
  description: string;
  /** Image file for the session structure */
  image: Blob;
  sessionDataStructureIds: string[];
};
export type SessionDataStructureDto = {
  /** The unique identifier of the session data structure */
  id: string;
  /** The title of the session mode */
  title: string;
  /** The description of the session data structure */
  description: string;
  /** The image associated with the session data structure */
  image: Blob;
};
export type FindSessionDataStructuresResponseDto = {
  /** List of session data structures */
  sessionDataStructures: SessionDataStructureDto[];
};
export type CreateSessionDataStructureRequestDto = {
  title: string;
  description: string;
  /** Image file for the session data structure */
  image: Blob;
};
export type SessionAlgorithmDto = {
  /** The unique identifier of the session Algorithm */
  id: string;
  /** The title of the session mode */
  title: string;
  /** The description of the session Algorithm */
  description: string;
  /** The image associated with the session Algorithm */
  image: Blob;
  /** The unique identifiers of the session structures that are associated with the session Algorithm */
  sessionStructureIds: string[];
};
export type FindSessionAlgorithmsResponseDto = {
  /** List of session algorithms */
  sessionAlgorithms: SessionAlgorithmDto[];
};
export type CreateSessionAlgorithmRequestDto = {
  title: string;
  description: string;
  /** Image file for the session algorithm */
  image: Blob;
  sessionStructureIds: string[];
};
export type CreateGraphSessionRequestDto = {
  /** Unique identifier for the session */
  id: string;
  image: Buffer;
  /** Identifier for the data structure type */
  sessionDataStructureId: string;
  /** Identifier for the structure type of data structure */
  sessionStructureId: string;
  /** Identifier for the user */
  userId: string;
  /** Identifier for the session mode */
  sessionModeId: string;
  /** Identifier for the analytics */
  analyticsId: string;
  /** Identifier for the algorithm */
  sessionAlgorithmId: string;
  /** Array of session vertex IDs */
  vertexIds: number[];
  /** Array of session edge IDs */
  edgeIds: number[];
};
export const {
  useAppControllerGetHelloQuery,
  useSessionModeControllerFindSessionModesQuery,
  useSessionModeControllerCreateSessionModeMutation,
  useSessionStructureControllerFindSessionStructuresQuery,
  useSessionStructureControllerCreateSessionStructureMutation,
  useSessionStructureControllerFindSessionAlgorithmsByStructureIdQuery,
  useSessionDataStructureControllerFindSessionDataStructuresQuery,
  useSessionDataStructureControllerCreateSessionDataStructureMutation,
  useSessionAlgorithmControllerFindSessionAlgorithmsQuery,
  useSessionAlgorithmControllerCreateSessionAlgorithmMutation,
  useSessionAlgorithmControllerFindSessionAlgorithmsByStructureIdQuery,
  useGraphSessionControllerCreateGraphSessionMutation,
} = injectedRtkApi;
