import type { UpdatePost } from '../types/project';

export const updates: UpdatePost[] = [
  {
    id: 'carp-architecture-research',
    title: 'Carp Mouth Architecture Research Completed',
    category: 'Research',
    summary: 'The Carp reference study confirmed the native protrusible bottom-feeding mouth architecture.',
    body: 'This research strengthens the reusable architecture knowledge needed for future bottom-feeding custom fish. It is a research milestone, not a completed custom-species implementation.',
    relatedRoadmapItems: ['native-fish-architecture', 'custom-fish-framework'],
  },
  {
    id: 'small-forage-research',
    title: 'Small Forage-Fish Research Underway',
    category: 'Research',
    summary: 'The next native architecture study is focused on a small forage-fish reference.',
    body: 'This study expands the donor/reference atlas toward a smaller body plan and helps prepare the custom-species foundation for a wider range of fish architecture.',
    relatedRoadmapItems: ['native-fish-architecture'],
  },
];
