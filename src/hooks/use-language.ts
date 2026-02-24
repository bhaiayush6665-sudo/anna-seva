import { useContext } from "react";
import * as LanguageProvider from "@/contexts/LanguageProvider";

export const useLanguage = () => {
  const ctx = useContext(LanguageProvider.LanguageContext);
  if (!ctx) throw new Error("Must be used inside LanguageProvider");
  return ctx;
};