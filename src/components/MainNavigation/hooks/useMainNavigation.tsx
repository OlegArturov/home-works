import { IMainNavigationItem } from "../types";
import { useTranslation } from "react-i18next";

export default function useMainNavigation() {
  const { t } = useTranslation("base_translations", {
    keyPrefix: "mainNavigation",
  });
  const mainNavigaTionItems: IMainNavigationItem[] = [
    {
      title: t("titles.home"),
      path: "/",
    },
    {
      title: t("titles.coutries"),
      path: "/countries",
    },
  ];
  return { mainNavigaTionItems };
}
