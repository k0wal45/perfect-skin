import React, { Dispatch, SetStateAction } from "react";
import { EveryService } from "./Data";

interface PricingTabsProps {
  selectedTab: number;
  setSelectedTab: Dispatch<SetStateAction<number>>;
}

export const PricingTabs = ({ selectedTab, setSelectedTab }: PricingTabsProps) => {
  return (
    <div className="w-full">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-6">
        {EveryService.map((t) => (
          <ToggleButton
            key={t.id}
            id={t.id}
            selected={selectedTab}
            setSelected={setSelectedTab}
          >
            {t.title}
          </ToggleButton>
        ))}
      </div>
    </div>
  );
};

const ToggleButton = ({
  children,
  selected,
  setSelected,
  id,
}: {
  children: string;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  id: number;
}) => {
  return (
    <div
      className={`rounded-lg transition-colors ${
        selected === id ? "bg-primary" : "bg-secondary"
      }`}
    >
      <button
        onClick={() => setSelected(id)}
        className={`w-full origin-top-left rounded-lg border py-3 text-xs font-medium transition-all md:text-base h-full ${
          selected === id
            ? "-translate-y-1 border-primary bg-white text-primary"
            : "border-secondary bg-white text-secondary hover:-rotate-2"
        }`}
      >
        {children}
      </button>
    </div>
  );
};


