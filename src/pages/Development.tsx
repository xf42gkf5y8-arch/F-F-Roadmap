import { GlassPanel } from '../components/ui/GlassPanel';
import { SectionHeader } from '../components/ui/SectionHeader';
import { StatusBadge } from '../components/ui/StatusBadge';
import { roadmapById } from '../data';

const foundationAreas = [
  ['FishForge', 'Tooling and workflow development for the custom-species pipeline.', 'fishforge'],
  ['Custom Species Pipeline', 'Model preparation, rigging, animation, feeding, physics, rendering, spawning, growth, and compatibility.', 'custom-fish-framework'],
  ['Native Fish Architecture Research', 'Native reference studies used to understand reusable fish architecture.', 'native-fish-architecture'],
  ['Runtime Verification', 'Verification work that supports the foundation without exposing raw telemetry as the public story.', undefined],
  ['Rigging & Animation Systems', 'Foundation work needed before custom species can move cleanly from model to gameplay.', undefined],
  ['Feeding / Mouth Systems', 'Reusable architecture research covering conventional, ventral, and protrusible mouth behavior.', 'native-fish-architecture'],
  ['Spawner & AI Research', 'Future-facing work for integration, populations, and natural behavior.', undefined],
  ['Map & Wild Framework', 'Technical foundations that will support Creek and the long-term Wild Mode systems.', 'wild-mode'],
] as const;

export function Development() {
  return (
    <div className="page">
      <SectionHeader
        eyebrow="ENGINEERING"
        title="The foundation beneath the roadmap"
        description="Technical work is translated into player-readable language while preserving the distinction between research and implemented features."
      />
      <div className="development-grid">
        {foundationAreas.map(([title, summary, roadmapId]) => {
          const item = roadmapId ? roadmapById[roadmapId] : undefined;
          return (
            <GlassPanel className="development-card" key={title}>
              <div className="roadmap-card__meta">
                <span>FOUNDATION</span>
                {item ? <StatusBadge status={item.status} compact /> : null}
              </div>
              <h3>{title}</h3>
              <p>{summary}</p>
            </GlassPanel>
          );
        })}
      </div>
      <GlassPanel className="research-matrix" featured>
        <div>
          <span className="eyebrow">REFERENCE ARCHITECTURE</span>
          <h2>Native runtime donor atlas — public view</h2>
          <p>Detailed telemetry stays internal. The public site shows what each verified reference contributes to the custom-fish foundation.</p>
        </div>
        <div className="research-matrix__rows">
          {roadmapById['native-fish-architecture'].milestones?.map((milestone) => (
            <div className="research-matrix__row" key={milestone.id}>
              <span>{milestone.label}</span>
              {milestone.status ? <StatusBadge status={milestone.status} compact /> : null}
            </div>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
}
