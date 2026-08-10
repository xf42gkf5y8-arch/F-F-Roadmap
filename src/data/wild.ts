import type { WildSubsystem } from '../types/project';

export const wildSubsystems: WildSubsystem[] = [
  {
    id: 'core',
    name: 'Core Wild Mode',
    roadmapItemId: 'wild-mode',
    group: 'Core',
    summary: 'The ecosystem-oriented mode itself, expected to begin with Swamp before expanding elsewhere.',
  },
  {
    id: 'reproduction',
    name: 'Reproduction',
    roadmapItemId: 'wild-reproduction',
    group: 'Life Cycle',
    summary: 'Breeding, mating, nests, eggs, guarding, juveniles, and growth concepts.',
  },
  {
    id: 'population',
    name: 'Population Simulation',
    roadmapItemId: 'wild-population',
    group: 'Population',
    summary: 'Finite populations, persistence, extinction, dynamic spawning, and ecosystem balance.',
  },
  {
    id: 'day-night',
    name: 'Day / Night',
    roadmapItemId: 'wild-day-night',
    group: 'Environment',
    summary: 'Time-of-day changes including sunrise, sunset, and behavior shifts.',
  },
  {
    id: 'seasons',
    name: 'Seasons & Winter',
    roadmapItemId: 'wild-seasons',
    group: 'Environment',
    summary: 'Seasonal behavior, vegetation change, snow, frozen surfaces, and slower winter activity concepts.',
  },
  {
    id: 'vegetation',
    name: 'Vegetation',
    roadmapItemId: 'wild-vegetation',
    group: 'Environment',
    summary: 'Dynamic vegetation and invasive-plant concepts for a changing ecosystem.',
  },
  {
    id: 'behavior',
    name: 'Fish Behavior',
    group: 'Behavior',
    summary: 'Long-term ideas include schooling, territory, hunger, fear, predator avoidance, and species-specific population behavior.',
  },
];
