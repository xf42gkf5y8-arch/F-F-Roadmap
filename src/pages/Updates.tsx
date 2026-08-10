import { GlassPanel } from '../components/ui/GlassPanel';
import { SectionHeader } from '../components/ui/SectionHeader';
import { roadmapById, updates } from '../data';

export function Updates() {
  return (
    <div className="page">
      <SectionHeader
        eyebrow="DEVLOG"
        title="Development updates"
        description="Narrative milestones that explain what changed and why it matters, with technical noise kept in the background."
      />
      <div className="update-feed">
        {updates.map((update) => (
          <article key={update.id} className="update-row">
            <div className="update-row__rail">
              <span>{update.date ?? 'CURRENT'}</span>
              <i aria-hidden="true" />
            </div>
            <GlassPanel className="update-card">
              <span className="micro-label">{update.category}</span>
              <h2>{update.title}</h2>
              <p className="update-card__summary">{update.summary}</p>
              <p>{update.body}</p>
              {update.relatedRoadmapItems?.length ? (
                <div className="tag-row">
                  {update.relatedRoadmapItems.map((id) => (
                    <span className="tag" key={id}>{roadmapById[id]?.title ?? id}</span>
                  ))}
                </div>
              ) : null}
            </GlassPanel>
          </article>
        ))}
      </div>
    </div>
  );
}
