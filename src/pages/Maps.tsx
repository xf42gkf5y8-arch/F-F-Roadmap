import { GlassPanel } from '../components/ui/GlassPanel';
import { SectionHeader } from '../components/ui/SectionHeader';
import { StatusBadge } from '../components/ui/StatusBadge';
import { maps, roadmapById } from '../data';

export function Maps() {
  return (
    <div className="page">
      <SectionHeader
        eyebrow="ENVIRONMENTS"
        title="Maps"
        description="Existing environments provide context while custom map work is tracked from the same authoritative roadmap data."
      />
      <div className="map-sequence" aria-label="Map progression">
        {[...maps].sort((a, b) => a.order - b.order).map((map) => (
          <div className="map-sequence__item" key={map.id}>
            <span>{String(map.order).padStart(2, '0')}</span>
            <strong>{map.name}</strong>
          </div>
        ))}
      </div>
      <div className="card-grid map-grid">
        {maps.map((map) => {
          const roadmapItem = map.roadmapItemId ? roadmapById[map.roadmapItemId] : undefined;
          return (
            <GlassPanel className={`map-card${map.id === 'creek' ? ' map-card--major' : ''}`} key={map.id} featured={map.id === 'creek'}>
              <div className="visual-placeholder visual-placeholder--map" aria-hidden="true">
                <span>{map.name}</span>
              </div>
              <div className="map-card__content">
                <div className="roadmap-card__meta">
                  <span>{map.environment}</span>
                  {roadmapItem ? <StatusBadge status={roadmapItem.status} compact /> : <span className="tag">EXISTING</span>}
                </div>
                <h2>{map.name}</h2>
                <p>{map.description}</p>
                {map.plannedFeatures?.length ? (
                  <ul className="feature-list">
                    {map.plannedFeatures.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                ) : null}
              </div>
            </GlassPanel>
          );
        })}
      </div>
    </div>
  );
}
