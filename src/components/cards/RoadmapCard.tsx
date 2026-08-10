import { Link } from 'react-router-dom';
import type { RoadmapItem } from '../../types/project';
import { GlassPanel } from '../ui/GlassPanel';
import { StatusBadge } from '../ui/StatusBadge';

interface RoadmapCardProps {
  item: RoadmapItem;
  compact?: boolean;
}

export function RoadmapCard({ item, compact = false }: RoadmapCardProps) {
  return (
    <GlassPanel className={`roadmap-card${compact ? ' roadmap-card--compact' : ''}`} featured={item.featured}>
      <div className="roadmap-card__meta">
        <span>{item.category}</span>
        <StatusBadge status={item.status} compact />
      </div>
      <div className="roadmap-card__body">
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
      </div>
      {!compact && item.milestones?.length ? (
        <div className="roadmap-card__milestones">
          <span className="micro-label">Research milestones</span>
          <ul>
            {item.milestones.slice(0, 3).map((milestone) => (
              <li key={milestone.id}>
                <span>{milestone.label}</span>
                {milestone.status ? <StatusBadge status={milestone.status} compact /> : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <Link className="text-link" to={item.category === 'Maps' ? '/maps' : item.category === 'Wild Mode' ? '/wild' : item.category === 'Custom Fish' ? '/fish' : '/development'}>
        View context <span aria-hidden="true">↗</span>
      </Link>
    </GlassPanel>
  );
}
