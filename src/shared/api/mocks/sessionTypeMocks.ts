import { BaseMock } from './TBaseMock';

type SessionType = {
  id: number;
  name: string;
  description: string;
  imagePath: string;
};

const sessionTypes: SessionType[] = [
  {
    id: 1,
    name: 'Graph',
    description: 'A collection of nodes connected by edges.',
    imagePath: '/images/graph.png',
  },
  {
    id: 2,
    name: 'Binary Tree',
    description:
      'A tree data structure in which each node has at most two children.',
    imagePath: '/images/binary-tree.png',
  },
  {
    id: 3,
    name: 'Binary Search Tree',
    description: 'A binary tree where nodes are arranged in a sorted order.',
    imagePath: '/images/binary-search-tree.png',
  },
];

const sessionTypeMocks: BaseMock = {
  '/session-types/GET': {
    status: 200,
    response: sessionTypes,
  },

  '/session-types/POST': {
    status: 201,
    response: (body: Omit<SessionType, 'id'>): SessionType => {
      const newSessionType: SessionType = {
        id: sessionTypes.length + 1,
        ...body,
      };
      sessionTypes.push(newSessionType);
      return newSessionType;
    },
  },

  '/session-types/:id/GET': {
    status: (id: number): number =>
      sessionTypes.find((s) => s.id === id) ? 200 : 404,
    response: (id: number): SessionType | undefined => {
      return sessionTypes.find((s) => s.id === id);
    },
  },

  '/session-types/:id/PUT': {
    status: (id: number): number =>
      sessionTypes.some((s) => s.id === id) ? 200 : 404,
    response: (
      id: number,
      body: Partial<SessionType>,
    ): SessionType | { message: string } => {
      const sessionTypeIndex = sessionTypes.findIndex((s) => s.id === id);
      if (sessionTypeIndex !== -1) {
        sessionTypes[sessionTypeIndex] = {
          ...sessionTypes[sessionTypeIndex],
          ...body,
        };
        return sessionTypes[sessionTypeIndex];
      }
      return { message: 'Session type not found' };
    },
  },

  '/session-types/:id/DELETE': {
    status: (id: number): number =>
      sessionTypes.some((s) => s.id === id) ? 204 : 404,
    response: (id: number): null | { message: string } => {
      const sessionTypeIndex = sessionTypes.findIndex((s) => s.id === id);
      if (sessionTypeIndex !== -1) {
        sessionTypes.splice(sessionTypeIndex, 1);
        return null;
      }
      return { message: 'Session type not found' };
    },
  },
};

export default sessionTypeMocks;
