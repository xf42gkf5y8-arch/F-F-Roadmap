import { GlassPanel } from '../components/ui/GlassPanel';
import { SectionHeader } from '../components/ui/SectionHeader';
import { StatusBadge } from '../components/ui/StatusBadge';
import { fish, roadmapById } from '../data';

export function Fish() {
  return (
    <div className="page">
      <SectionHeader
        eyebrow="CUSTOM SPECIES"
        title="Fish"
        description="Species are only added when they are actually part of the project. Biological or gameplay statistics are left unknown until provided."
      />
      <div className="fish-layout">
        {fish.map((entry) => {
          const roadmapItem = entry.roadmapItemId ? roadmapById[entry.roadmapItemId] : undefined;
          return (
            <GlassPanel className="fish-card" key={entry.id} featured>
              <div className="visual-placeholder visual-placeholder--fish" aria-hidden="true">
                <div className="fish-silhouette" />
              </div>
              <div className="fish-card__content">
                <span className="micro-label">{entry.category} · {entry.ecosystem}</span>
                <div className="fish-card__title-row">
                  <h2>{entry.name}</h2>
                  {roadmapItem ? <StatusBadge status={roadmapItem.status} /> : null}
                </div>
                <p>{entry.description}</p>
                <div className="spec-row">
                  <div><span>Development stage</span><strong>{entry.developmentStage}</strong></div>
                  <div><span>Progress</span><strong>Not quantified</strong></div>
                  <div><span>ETA</span><strong>Not announced</strong></div>
                </div>
              </div>
            </GlassPanel>
          );
        })}
      </div>
    </div>
  );
}
