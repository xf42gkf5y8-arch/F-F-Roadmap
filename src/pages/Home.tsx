import { Link } from 'react-router-dom';
import { RoadmapCard } from '../components/cards/RoadmapCard';
import { GlassPanel } from '../components/ui/GlassPanel';
import { SectionHeader } from '../components/ui/SectionHeader';
import { StatusBadge } from '../components/ui/StatusBadge';
import { featuredRoadmapIds, roadmapById, updates } from '../data';

export function Home() {
  const featured = featuredRoadmapIds.map((id) => roadmapById[id]).filter(Boolean);
  const latestUpdate = updates[0];

  return (
    <div className="page page--home">
      <section className="hero">
        <div className="hero__copy">
          <span className="eyebrow">FEED AND GROW: FISH — EXPANSION PROJECT</span>
          <h1>Building a larger, deeper aquatic world.</h1>
          <p>
            A public development portal for custom fish, new environments, Wild Mode,
            foundational research, and the systems that make the expansion possible.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" to="/roadmap">Explore roadmap</Link>
            <Link className="button button--quiet" to="/development">Development foundation</Link>
          </div>
        </div>
        <div className="hero__core" aria-hidden="true">
          <div className="hero__core-ring hero__core-ring--outer" />
          <div className="hero__core-ring hero__core-ring--inner" />
          <div className="hero__core-body">
            <span>PROJECT</span>
            <strong>FOUNDATION</strong>
          </div>
          <div className="hero__reflection" />
        </div>
        <GlassPanel className="hero__telemetry">
          <span className="micro-label">CURRENT FOCUS</span>
          <strong>Custom Fish Architecture</strong>
          <StatusBadge status="RESEARCH" compact />
          <div className="signal-line" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i />
          </div>
          <p>Research first. Implementation status remains separate.</p>
        </GlassPanel>
      </section>

      <section className="content-section">
        <SectionHeader
          eyebrow="PROJECT PILLARS"
          title="What the expansion is building toward"
          description="A focused view of the largest public-facing workstreams without turning the homepage into a technical dump."
        />
        <div className="card-grid card-grid--featured">
          {featured.map((item) => <RoadmapCard key={item.id} item={item} compact />)}
        </div>
      </section>

      <section className="content-section split-section">
        <GlassPanel className="focus-panel" featured>
          <span className="eyebrow">DEVELOPMENT FOUNDATION</span>
          <h2>Research is progress — but it is not a finished feature.</h2>
          <p>
            Native fish architecture studies feed the custom-species framework. Those
            milestones are tracked separately from Smallmouth Bass or any future player-facing fish.
          </p>
          <Link className="text-link" to="/development">See the development foundation ↗</Link>
        </GlassPanel>
        {latestUpdate ? (
          <GlassPanel className="latest-panel">
            <span className="micro-label">LATEST PUBLIC UPDATE</span>
            <h3>{latestUpdate.title}</h3>
            <p>{latestUpdate.summary}</p>
            <Link className="text-link" to="/updates">Read updates ↗</Link>
          </GlassPanel>
        ) : null}
      </section>
    </div>
  );
}
