"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/stores/themeStore";

const ClientComponent = () => {
  const { theme, fetchTheme } = useThemeStore();

  useEffect(() => {
    fetchTheme();
  }, [fetchTheme]);

  console.log("theme", theme);

  return <div>Client Component</div>;
};

export default ClientComponent;
