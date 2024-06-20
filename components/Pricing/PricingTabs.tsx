'use client'
import React, { Dispatch, SetStateAction, useState } from "react";

interface PricingTabsProps {
  selectedTab: number;
  setSelectedTab: Dispatch<SetStateAction<number>>;
}

export const PricingTabs = ({ selectedTab, setSelectedTab }: PricingTabsProps) => {
  return (
    <div className="w-full">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-6">
        {TAB_DATA.map((t) => (
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
        className={`w-full origin-top-left rounded-lg border py-3 text-xs font-medium transition-all md:text-base ${
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

const TAB_DATA = [
  {
    id: 1,
    title: "Kosmetyka",
  },
  {
    id: 2,
    title: "Zabiegi na ciało",
  },
  {
    id: 3,
    title: "Medycyna estetyczna",
  },
  {
    id: 4,
    title: "Depilacja laserowa",
  },
  {
    id: 5,
    title: "Podologia",
  },
  {
    id: 6,
    title: "Laser pikoseundowy",
  },
];
