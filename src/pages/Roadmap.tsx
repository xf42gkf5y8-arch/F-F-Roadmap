import { RoadmapCard } from '../components/cards/RoadmapCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { roadmapItems } from '../data';
import type { ProjectStatus } from '../types/project';

const groups: Array<{ label: string; statuses: ProjectStatus[]; description: string }> = [
  {
    label: 'NOW — FOUNDATION',
    statuses: ['RESEARCH', 'IN DEVELOPMENT', 'TESTING'],
    description: 'Research, engineering, and implementations that are actively moving the foundation forward.',
  },
  {
    label: 'NEXT — COMMITTED',
    statuses: ['PLANNED'],
    description: 'Work we intend to build, without invented percentages or release windows.',
  },
  {
    label: 'LATER — EXPLORATION',
    statuses: ['IDEA'],
    description: 'Long-term concepts that remain intentionally separate from committed implementation.',
  },
];

export function Roadmap() {
  return (
    <div className="page">
      <SectionHeader
        eyebrow="MASTER ROADMAP"
        title="Development status, without the guesswork"
        description="Research, planned work, implementation, and long-term ideas use distinct statuses so progress stays accurate."
      />
      <div className="roadmap-groups">
        {groups.map((group) => {
          const items = roadmapItems.filter((item) => group.statuses.includes(item.status));
          if (!items.length) return null;
          return (
            <section className="roadmap-group" key={group.label}>
              <div className="roadmap-group__header">
                <span className="micro-label">{group.label}</span>
                <p>{group.description}</p>
              </div>
              <div className="card-grid">
                {items.map((item) => <RoadmapCard key={item.id} item={item} />)}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
