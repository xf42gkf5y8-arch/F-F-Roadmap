import { GlassPanel } from '../components/ui/GlassPanel';
import { SectionHeader } from '../components/ui/SectionHeader';
import { changelog } from '../data';

export function Changelog() {
  return (
    <div className="page">
      <SectionHeader
        eyebrow="HISTORY"
        title="Changelog"
        description="A concise chronological record. Full development stories stay on the Updates page."
      />
      {changelog.length ? (
        <div className="changelog-list">
          {changelog.map((entry) => (
            <GlassPanel className="changelog-entry" key={entry.id}>
              <span className="micro-label">{entry.date ?? 'UNDATED'}</span>
              {entry.groups.map((group) => (
                <section key={group.label}>
                  <h3>{group.label}</h3>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>
              ))}
            </GlassPanel>
          ))}
        </div>
      ) : (
        <GlassPanel className="empty-state">
          <span className="micro-label">NO PUBLIC ENTRIES YET</span>
          <h2>The changelog will begin when project changes are ready to publish.</h2>
          <p>No dates or release milestones have been invented for the baseline.</p>
        </GlassPanel>
      )}
    </div>
  );
}
