"use client";

import { useCallback, useState } from "react";
import Providers from "../providers/Providers";
import Discovery from "./components/Discovery";
import Friends from "./components/Friends";
import Navigation, { TAB } from "./components/Navigation";

function Social() {
  const [activeTab, setActiveTab] = useState(TAB.DISCOVERY);

  const onPressTab = useCallback((tab: TAB) => setActiveTab(tab), []);

  return (
    <div className="h-screen w-screen">
      <Navigation activeTab={activeTab} onPressTab={onPressTab} />

      {activeTab === TAB.FRIENDS ? <Friends /> : <Discovery />}
    </div>
  );
}

const RootSocial = () => {
  return (
    <Providers>
      <Social />
    </Providers>
  );
};

export default RootSocial;
