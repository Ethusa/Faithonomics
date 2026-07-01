import type { FC, ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string };

const IconBase: FC<IconProps & { children: ReactNode }> = ({ size = 20, children, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

export const Award: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="8" r="5" />
    <path d="m8.5 12.5-2 7 5.5-3 5.5 3-2-7" />
  </IconBase>
);

export const BookOpen: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M4 5.5c2.8 0 5 .8 8 2.5v11c-3-1.7-5.2-2.5-8-2.5z" />
    <path d="M20 5.5c-2.8 0-5 .8-8 2.5v11c3-1.7 5.2-2.5 8-2.5z" />
  </IconBase>
);

export const ClipboardCheck: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M9 4h6l1 2h3v15H5V6h3z" />
    <path d="m9 13 2 2 4-5" />
  </IconBase>
);

export const ChevronLeft: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="m15 18-6-6 6-6" />
  </IconBase>
);

export const ChevronRight: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="m9 18 6-6-6-6" />
  </IconBase>
);

export const Download: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M12 4v11" />
    <path d="m8 11 4 4 4-4" />
    <path d="M5 20h14" />
  </IconBase>
);

export const ExternalLink: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M14 4h6v6" />
    <path d="m10 14 10-10" />
    <path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
  </IconBase>
);

export const FileText: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h6" />
  </IconBase>
);

export const LayoutDashboard: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <rect x="4" y="4" width="7" height="7" rx="1" />
    <rect x="13" y="4" width="7" height="4" rx="1" />
    <rect x="13" y="10" width="7" height="10" rx="1" />
    <rect x="4" y="13" width="7" height="7" rx="1" />
  </IconBase>
);

export const Lock: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <rect x="5" y="10" width="14" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </IconBase>
);

export const Maximize: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M8 3H3v5" />
    <path d="M3 3l6 6" />
    <path d="M16 3h5v5" />
    <path d="m21 3-6 6" />
    <path d="M8 21H3v-5" />
    <path d="m3 21 6-6" />
    <path d="M16 21h5v-5" />
    <path d="m21 21-6-6" />
  </IconBase>
);

export const LogIn: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M10 17H5V7h5" />
    <path d="M14 8l4 4-4 4" />
    <path d="M18 12H9" />
  </IconBase>
);

export const Menu: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </IconBase>
);

export const PlayCircle: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m10 8 6 4-6 4z" />
  </IconBase>
);

export const PauseCircle: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 9v6M14 9v6" />
  </IconBase>
);

export const ShieldCheck: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
    <path d="m8.5 12 2.2 2.2 4.8-5" />
  </IconBase>
);

export const Users: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 20c.7-3.2 2.7-5 5.5-5s4.8 1.8 5.5 5" />
    <path d="M15 11a3 3 0 1 0 0-6" />
    <path d="M16 15c2.4.3 4 2 4.5 5" />
  </IconBase>
);

export const X: FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </IconBase>
);
