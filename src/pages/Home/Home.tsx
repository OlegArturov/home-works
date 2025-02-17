import { Box } from "@mui/material";
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
  const { countriesState, isCountriesLoading } = useContext(CountriesContext);

  return (
    <Box>
      <PresentationBlock>
        <PageTitle text={t("mainTitle")} />
      </PresentationBlock>
      {!isCountriesLoading &&
        countriesState &&
        countriesState.countries.length > 0 && (
          <PresentationBlock>
            <CapitalFormComponent />
          </PresentationBlock>
        )}
    </Box>
  );
}
