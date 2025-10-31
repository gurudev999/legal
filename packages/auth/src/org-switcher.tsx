import * as React from 'react';

export interface OrgSwitcherProps {
  currentOrg?: { id: string; name: string };
  orgs?: Array<{ id: string; name: string }>;
  onSwitchOrg?: (orgId: string) => void;
}

export function OrgSwitcher({ currentOrg, orgs = [], onSwitchOrg }: OrgSwitcherProps) {
  return (
    <div className="inline-flex items-center space-x-2 rounded-md border px-3 py-2">
      <span className="text-sm font-medium">
        {currentOrg?.name ?? 'No organisation selected'}
      </span>
      {orgs.length > 1 && (
        <button
          onClick={() => {
            if (onSwitchOrg) {
              const nextOrg = orgs.find((o) => o.id !== currentOrg?.id);
              if (nextOrg) onSwitchOrg(nextOrg.id);
            }
          }}
          className="text-xs text-slate-500 hover:text-slate-900"
        >
          Switch
        </button>
      )}
    </div>
  );
}
