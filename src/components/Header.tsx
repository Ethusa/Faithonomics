import type { ReactNode } from "react";
import { identities } from "../data/sampleData";
import type { LearnerIdentity } from "../domain/types";
import { ClipboardCheck, FileText, LayoutDashboard, LogIn, ShieldCheck } from "./Icons";

export type PortalView = "learner" | "lesson" | "lecturer" | "admin" | "reports";

const logoUrl = `${import.meta.env.BASE_URL}faithonomics-logo.png`;

const TooltipButton = ({
  label,
  children,
  onClick,
  active = false,
}: {
  label: string;
  children: ReactNode;
  onClick: () => void;
  active?: boolean;
}) => (
  <button className={active ? "icon-button active" : "icon-button"} onClick={onClick} title={label} aria-label={label}>
    {children}
  </button>
);

const RoleSwitcher = ({
  identity,
  onChange,
}: {
  identity: LearnerIdentity;
  onChange: (next: LearnerIdentity) => void;
}) => (
  <label className="role-switcher">
    <span>Role</span>
    <select
      value={identity.memberId}
      onChange={(event) => {
        const next = Object.values(identities).find((candidate) => candidate.memberId === event.target.value);
        if (next) {
          onChange(next);
        }
      }}
    >
      <option value={identities.learner.memberId}>Learner</option>
      <option value={identities.lecturer.memberId}>Lecturer</option>
      <option value={identities.administrator.memberId}>Administrator</option>
    </select>
  </label>
);

export const Header = ({
  identity,
  view,
  setView,
  onIdentityChange,
  activeLevelTitle,
  onLogout,
}: {
  identity: LearnerIdentity;
  view: PortalView;
  setView: (view: PortalView) => void;
  onIdentityChange: (next: LearnerIdentity) => void;
  activeLevelTitle: string | null;
  onLogout: () => void;
}) => (
  <header className="topbar">
    <div className="brand-mark" aria-hidden="true">
      <img src={logoUrl} alt="" />
    </div>
    <div>
      <p className="eyebrow">Faithonomics</p>
      <h1>Learning Portal</h1>
    </div>
    <nav className="nav-actions" aria-label="Portal views">
      <TooltipButton label="Learner dashboard" active={view === "learner"} onClick={() => setView("learner")}>
        <LayoutDashboard size={20} />
      </TooltipButton>
      <TooltipButton label="Lecturer dashboard" active={view === "lecturer"} onClick={() => setView("lecturer")}>
        <ClipboardCheck size={20} />
      </TooltipButton>
      <TooltipButton label="Reports" active={view === "reports"} onClick={() => setView("reports")}>
        <FileText size={20} />
      </TooltipButton>
      <TooltipButton label="Administrator" active={view === "admin"} onClick={() => setView("admin")}>
        <ShieldCheck size={20} />
      </TooltipButton>
    </nav>
    <div className="identity-cluster">
      {activeLevelTitle ? <span className="level-badge">{activeLevelTitle}</span> : null}
      <RoleSwitcher identity={identity} onChange={onIdentityChange} />
      <button className="login-link" type="button" onClick={onLogout}>
        <LogIn size={17} />
        Change level
      </button>
    </div>
  </header>
);
