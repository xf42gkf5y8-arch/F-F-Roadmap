export function AmbientBackdrop() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__depth" />
      <div className="ambient__arc ambient__arc--left" />
      <div className="ambient__arc ambient__arc--right" />
      <div className="ambient__shaft" />
      <div className="ambient__waterline" />
    </div>
  );
}
