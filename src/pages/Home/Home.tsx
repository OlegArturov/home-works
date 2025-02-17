import { Box, SxProps } from "@mui/material";
import { useContext } from "react";
import PresentationBlock from "../../components/PresentationBlock/PresentationBlock";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import CapitalFormComponent from "../../components/CapitalFormComponent/CapitalFormComponent";
import CountriesContext from "../../contexts/CountriesContext";

export default function Home() {
  const { t } = useTranslation("base_translations", {
    keyPrefix: "pages.home",
  });
  const styles: Record<string, SxProps> = {
    wrapper: {},
  };
  const { isCountriesLoading } = useContext(CountriesContext);
  return (
    <Box sx={styles.wrapper}>
      <PresentationBlock>
        <PageTitle text={t("mainTitle")} />
      </PresentationBlock>
      {!isCountriesLoading && (
        <PresentationBlock>
          <CapitalFormComponent />
        </PresentationBlock>
      )}
    </Box>
  );
}
