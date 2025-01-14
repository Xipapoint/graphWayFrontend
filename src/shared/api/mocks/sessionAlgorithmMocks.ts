import { BaseMock } from './TBaseMock';

type Algorithm = {
  id: number;
  name: string;
  description: string;
  imagePath: string;
};

const algorithms: Algorithm[] = [
  {
    id: 1,
    name: 'Dijkstra',
    description:
      'A shortest-path algorithm for weighted graphs with non-negative edge weights.',
    imagePath: '/images/dijkstra.png',
  },
  {
    id: 2,
    name: 'Floyd-Warshall',
    description:
      'An algorithm for finding shortest paths in a weighted graph with positive or negative edge weights.',
    imagePath: '/images/floyd-warshall.png',
  },
];

const sessionAlgorithmsMocks: BaseMock = {
  '/algorithms/GET': {
    status: 200,
    response: algorithms,
  },

  'POST /algorithms': {
    status: 201,
    response: (body: Omit<Algorithm, 'id'>): Algorithm => {
      const newAlgorithm: Algorithm = {
        id: algorithms.length + 1,
        ...body,
      };
      algorithms.push(newAlgorithm);
      return newAlgorithm;
    },
  },

  '/algorithms/:id': {
    status: (id: number): number =>
      algorithms.find((a) => a.id === id) ? 200 : 404,
    response: (id: number): Algorithm | { message: string } => {
      const algorithm = algorithms.find((a) => a.id === id);
      return algorithm || { message: 'Algorithm not found' };
    },
  },

  '/algorithms/:id/PUT': {
    status: (id: number): number =>
      algorithms.some((a) => a.id === id) ? 200 : 404,
    response: (
      id: number,
      body: Partial<Algorithm>,
    ): Algorithm | { message: string } => {
      const algorithmIndex = algorithms.findIndex((a) => a.id === id);
      if (algorithmIndex !== -1) {
        algorithms[algorithmIndex] = { ...algorithms[algorithmIndex], ...body };
        return algorithms[algorithmIndex];
      }
      return { message: 'Algorithm not found' };
    },
  },

  '/algorithms/:id/DELETE': {
    status: (id: number): number =>
      algorithms.some((a) => a.id === id) ? 204 : 404,
    response: (id: number): null | { message: string } => {
      const algorithmIndex = algorithms.findIndex((a) => a.id === id);
      if (algorithmIndex !== -1) {
        algorithms.splice(algorithmIndex, 1);
        return null;
      }
      return { message: 'Algorithm not found' };
    },
  },
};

export default sessionAlgorithmsMocks;
