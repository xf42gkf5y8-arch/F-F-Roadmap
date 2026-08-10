import type { ProjectStatus } from '../../types/project';

interface StatusBadgeProps {
  status: ProjectStatus;
  compact?: boolean;
}

const statusClassName = (status: ProjectStatus) =>
  `status-badge status-${status.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}`;

export function StatusBadge({ status, compact = false }: StatusBadgeProps) {
  return (
    <span className={`${statusClassName(status)}${compact ? ' status-badge--compact' : ''}`}>
      <span className="status-badge__dot" aria-hidden="true" />
      {status}
    </span>
  );
}
