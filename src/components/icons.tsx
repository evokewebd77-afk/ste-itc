type Props = { className?: string };

export function ProbeIcon({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2v14" />
      <path d="M9 16h6l-1 6h-4l-1-6Z" />
      <path d="M10 5h4" />
      <path d="M10 8h4" />
    </svg>
  );
}

export function ShieldIcon({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3 4 6v6c0 4.5 3.2 8.3 8 9 4.8-.7 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function BulbIcon({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

export function HammerIcon({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m14 5 5 5" />
      <path d="m12 7 5 5" />
      <path d="M3 21 14 10" />
      <path d="m5 3 6 6 4-4-6-6-4 4Z" />
    </svg>
  );
}

export function ImpactIcon({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function DropletIcon({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3s6 6.1 6 10.5a6 6 0 0 1-12 0C6 9.1 12 3 12 3Z" />
      <path d="M9 14a3 3 0 0 0 3 3" />
    </svg>
  );
}

export function FlaskIcon({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 3h6" />
      <path d="M10 3v6L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9V3" />
      <path d="M7.5 15h9" />
    </svg>
  );
}

export function BeakerIcon({ className }: Props) {
  return FlaskIcon({ className });
}

const iconMap: Record<string, (p: Props) => React.JSX.Element> = {
  "test-probes-and-test-pins": ProbeIcon,
  "emi-shielding-material": ShieldIcon,
  "testing-apparatus-luminary-test": BulbIcon,
  "spring-hammer-test-apparatus": HammerIcon,
  "impact-ik-test-apparatus": ImpactIcon,
  "ip-test-apparatus": DropletIcon,
  "laboratory-test-apparatus": FlaskIcon,
};

export function CategoryIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon = iconMap[slug] ?? FlaskIcon;
  return <Icon className={className} />;
}
