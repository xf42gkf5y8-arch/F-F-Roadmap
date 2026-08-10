export type ProjectStatus =
  | 'IDEA'
  | 'PLANNED'
  | 'RESEARCH'
  | 'IN DEVELOPMENT'
  | 'TESTING'
  | 'BLOCKED'
  | 'ON HOLD'
  | 'COMPLETED';

export type RoadmapCategory =
  | 'Custom Fish'
  | 'Research'
  | 'Maps'
  | 'Wild Mode'
  | 'Development';

export interface Milestone {
  id: string;
  label: string;
  status?: ProjectStatus;
}

export interface RoadmapItem {
  id: string;
  title: string;
  slug: string;
  category: RoadmapCategory;
  status: ProjectStatus;
  priority?: 'FOUNDATION' | 'MAJOR' | 'STANDARD';
  summary: string;
  description?: string;
  stage?: string;
  dependencies?: string[];
  relatedItems?: string[];
  tags?: string[];
  milestones?: Milestone[];
  featured?: boolean;
}

export interface MapEntry {
  id: string;
  name: string;
  slug: string;
  roadmapItemId?: string;
  description: string;
  environment: string;
  supportedModes?: string[];
  plannedModes?: string[];
  plannedFeatures?: string[];
  order: number;
}

export interface FishEntry {
  id: string;
  name: string;
  scientificName?: string;
  slug: string;
  roadmapItemId?: string;
  category: string;
  ecosystem: string;
  developmentStage: string;
  description: string;
  dependencies?: string[];
}

export interface WildSubsystem {
  id: string;
  name: string;
  roadmapItemId?: string;
  summary: string;
  group: 'Core' | 'Life Cycle' | 'Population' | 'Environment' | 'Behavior';
}

export interface UpdatePost {
  id: string;
  title: string;
  category: string;
  summary: string;
  body: string;
  date?: string;
  relatedRoadmapItems?: string[];
}

export interface ChangelogEntry {
  id: string;
  date?: string;
  groups: Array<{
    label: 'Added' | 'Changed' | 'Research' | 'Fixed' | 'Development';
    items: string[];
  }>;
}
