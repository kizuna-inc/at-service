import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export interface SidebarMenuItem {
  to: string;
  end?: boolean;
  label: string;
  icon: LucideIcon;
}

interface DashboardSidebarProps {
  ariaLabel: string;
  items: SidebarMenuItem[];
  helpTitle: string;
  helpLine1: string;
  helpLine2: string;
}

export const DashboardSidebar = ({
  ariaLabel,
  items,
  helpTitle,
  helpLine1,
  helpLine2,
}: DashboardSidebarProps) => {
  return (
    <aside className="space-y-4">
      <nav
        aria-label={ariaLabel}
        className="bg-bg-surface shadow-card p-3 border border-border rounded-2xl"
      >
        <ul className="space-y-1">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl w-full text-sm text-left transition-colors cursor-pointer ${
                      isActive
                        ? "bg-primary-light font-semibold text-primary"
                        : "font-medium text-text-body hover:bg-bg-subtle hover:text-text-primary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`size-4 shrink-0 ${
                          isActive ? "text-primary" : "text-text-primary"
                        }`}
                      />
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="bg-bg-surface shadow-card p-5 border border-border rounded-2xl">
        <h2 className="font-bold text-text-primary text-sm">{helpTitle}</h2>
        <p className="mt-1.5 text-text-muted text-sm">{helpLine1}</p>
        <p className="text-text-muted text-xs">{helpLine2}</p>
      </div>
    </aside>
  );
};
