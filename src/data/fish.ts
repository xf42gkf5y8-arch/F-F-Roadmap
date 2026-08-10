import type { FishEntry } from '../types/project';

export const fish: FishEntry[] = [
  {
    id: 'smallmouth-bass',
    name: 'Smallmouth Bass',
    slug: 'smallmouth-bass',
    roadmapItemId: 'smallmouth-bass',
    category: 'Custom species',
    ecosystem: 'Freshwater',
    developmentStage: 'Awaiting custom-species foundation',
    description:
      'An important early custom-species target. It is not presented as implemented; development depends on the foundational custom-fish systems.',
    dependencies: ['custom-fish-framework', 'native-fish-architecture'],
  },
];
