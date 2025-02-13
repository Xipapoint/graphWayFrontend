import { customInstance } from '.././customInstance';
/**
 * Generated by orval v7.4.1 🍺
 * Do not edit manually.
 * GraphWay API
 * API для работы с режимами сессий
 * OpenAPI spec version: 1.0
 */
import type {
  CreateSessionStructureRequestDTO,
  FindSessionStructuresResponseDTO,
  SessionStructureDTO,
} from '.././model';

/**
 * @summary Find session Structures
 */
export type sessionStructureControllerFindSessionStructuresResponse = {
  data: FindSessionStructuresResponseDTO | void;
  status: number;
  headers: Headers;
};

export const getSessionStructureControllerFindSessionStructuresUrl = () => {
  return `/session-structures/all`;
};

export const sessionStructureControllerFindSessionStructures = async (
  options?: RequestInit,
): Promise<sessionStructureControllerFindSessionStructuresResponse> => {
  return customInstance<sessionStructureControllerFindSessionStructuresResponse>(
    getSessionStructureControllerFindSessionStructuresUrl(),
    {
      ...options,
      method: 'GET',
    },
  );
};

/**
 * @summary Create a session Structure
 */
export type sessionStructureControllerCreateSessionStructureResponse = {
  data: void | void;
  status: number;
  headers: Headers;
};

export const getSessionStructureControllerCreateSessionStructureUrl = () => {
  return `/session-structures/create`;
};

export const sessionStructureControllerCreateSessionStructure = async (
  createSessionStructureRequestDTO: CreateSessionStructureRequestDTO,
  options?: RequestInit,
): Promise<sessionStructureControllerCreateSessionStructureResponse> => {
  return customInstance<sessionStructureControllerCreateSessionStructureResponse>(
    getSessionStructureControllerCreateSessionStructureUrl(),
    {
      ...options,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...options?.headers },
      body: JSON.stringify(createSessionStructureRequestDTO),
    },
  );
};

/**
 * @summary Find session structures by data structure ID
 */
export type sessionStructureControllerFindSessionAlgorithmsByStructureIdResponse =
  {
    data: SessionStructureDTO[] | void;
    status: number;
    headers: Headers;
  };

export const getSessionStructureControllerFindSessionAlgorithmsByStructureIdUrl =
  (dataStructureId: string) => {
    return `/session-structures/by-data-structure/${dataStructureId}`;
  };

export const sessionStructureControllerFindSessionAlgorithmsByStructureId =
  async (
    dataStructureId: string,
    options?: RequestInit,
  ): Promise<sessionStructureControllerFindSessionAlgorithmsByStructureIdResponse> => {
    return customInstance<sessionStructureControllerFindSessionAlgorithmsByStructureIdResponse>(
      getSessionStructureControllerFindSessionAlgorithmsByStructureIdUrl(
        dataStructureId,
      ),
      {
        ...options,
        method: 'GET',
      },
    );
  };
