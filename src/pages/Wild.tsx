import { GlassPanel } from '../components/ui/GlassPanel';
import { SectionHeader } from '../components/ui/SectionHeader';
import { StatusBadge } from '../components/ui/StatusBadge';
import { roadmapById, wildSubsystems } from '../data';

export function Wild() {
  return (
    <div className="page page--wild">
      <section className="wild-hero">
        <div>
          <span className="eyebrow">MAJOR LONG-TERM SYSTEM</span>
          <h1>Wild Mode</h1>
          <p>
            An ecosystem-oriented mode that grows beyond standard Survival by connecting
            populations, life cycles, behavior, and environmental change.
          </p>
        </div>
        <StatusBadge status={roadmapById['wild-mode'].status} />
      </section>
      <SectionHeader
        eyebrow="INDEPENDENT SUBSYSTEMS"
        title="One mode, many separate development states"
        description="A subsystem can remain an idea while another enters research. The page never treats the entire Wild system as implemented just because one part moves forward."
      />
      <div className="wild-grid">
        {wildSubsystems.map((system) => {
          const roadmapItem = system.roadmapItemId ? roadmapById[system.roadmapItemId] : undefined;
          return (
            <GlassPanel className="wild-card" key={system.id} featured={system.id === 'core'}>
              <div className="roadmap-card__meta">
                <span>{system.group}</span>
                {roadmapItem ? <StatusBadge status={roadmapItem.status} compact /> : <span className="tag">CONCEPT AREA</span>}
              </div>
              <h3>{system.name}</h3>
              <p>{system.summary}</p>
            </GlassPanel>
          );
        })}
      </div>
    </div>
  );
}
