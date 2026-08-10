import { Link } from 'react-router-dom';
import { RoadmapCard } from '../components/cards/RoadmapCard';
import { GlassPanel } from '../components/ui/GlassPanel';
import { SectionHeader } from '../components/ui/SectionHeader';
import { StatusBadge } from '../components/ui/StatusBadge';
import { featuredRoadmapIds, roadmapById, updates } from '../data';

export function Home() {
  const featured = featuredRoadmapIds.map((id) => roadmapById[id]).filter(Boolean);
  const currentFocus = roadmapById['native-fish-architecture'];
  const latestUpdate = updates[0];

  return (
    <div className="page page--home">
      <section className="hero" aria-labelledby="home-hero-title">
        <div className="hero__copy">
          <div className="hero__phase">
            <span className="hero__phase-dot" aria-hidden="true" />
            <span>FOUNDATION PHASE</span>
            <span aria-hidden="true">/</span>
            <span>PUBLIC ROADMAP</span>
          </div>

          <span className="eyebrow">FEED AND GROW: FISH — EXPANSION PROJECT</span>
          <h1 id="home-hero-title">Expanding the world from the foundation up.</h1>
          <p>
            A public development portal for new fish, new environments, Wild Mode,
            and the underlying systems required to make the expansion work correctly.
          </p>

          <div className="hero__actions">
            <Link className="button button--primary" to="/roadmap">Explore roadmap</Link>
            <Link className="button button--quiet" to="/development">Development foundation</Link>
          </div>

          <div className="hero__trace" aria-hidden="true">
            <span>RESEARCH</span>
            <i />
            <span>ARCHITECTURE</span>
            <i />
            <span>IMPLEMENTATION</span>
          </div>
        </div>

        <div className="hero__core" aria-hidden="true">
          <div className="hero__core-halo hero__core-halo--wide" />
          <div className="hero__core-halo hero__core-halo--tight" />
          <div className="hero__core-arc hero__core-arc--left" />
          <div className="hero__core-arc hero__core-arc--right" />

          <div className="hero__beacon">
            <div className="hero__beacon-cap" />
            <div className="hero__beacon-spine">
              <i /><i /><i /><i /><i /><i /><i /><i />
            </div>
            <div className="hero__beacon-core" />
          </div>

          <div className="hero__platform" />
          <div className="hero__reflection" />
          <span className="hero__core-label">PROJECT FOUNDATION</span>
        </div>

        {currentFocus ? (
          <GlassPanel className="hero__telemetry">
            <div className="hero__telemetry-topline">
              <span className="micro-label">CURRENT FOCUS</span>
              <span className="hero__telemetry-pulse" aria-hidden="true" />
            </div>
            <strong>{currentFocus.title}</strong>
            <StatusBadge status={currentFocus.status} compact />

            <div className="signal-line" aria-hidden="true">
              <i /><i /><i /><i /><i /><i /><i /><i />
            </div>

            <div className="hero__telemetry-rows">
              <div>
                <span>TRACK</span>
                <strong>Native architecture</strong>
              </div>
              <div>
                <span>IMPLEMENTATION</span>
                <strong>Tracked separately</strong>
              </div>
            </div>

            <p>{currentFocus.summary}</p>
            <Link className="text-link" to="/development">Open development view ↗</Link>
          </GlassPanel>
        ) : null}

        <div className="hero__scroll" aria-hidden="true">
          <span>PROJECT PILLARS</span>
          <i />
        </div>
      </section>

      <section className="content-section content-section--pillars">
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
