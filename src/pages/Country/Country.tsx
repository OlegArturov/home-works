import { Box } from "@mui/material";
import PresentationBlock from "../../components/PresentationBlock/PresentationBlock";
import PageTitle from "../../components/PageTitle/PageTitle";
import CountryInfoBlock from "./components/CountryInfoBlock/CountryInfoBlock";
import useCountry from "../../hooks/Countries/useCountry";
import { useTranslation } from "react-i18next";
import NavigateButton from "../../components/NavigateButton/NavigateButton";

export default function Country() {
  const { t } = useTranslation("base_translations", {
    keyPrefix: "pages.country",
  });
  const {
    countriesState,
    translationFromSearchParams,
    isCountriesLoading,
    renderInfo,
    deleteCountry,
  } = useCountry();

  return (
    <Box>
      {!isCountriesLoading && countriesState?.selectedCountryToDisplay && (
        <PresentationBlock>
          <PageTitle
            text={
              translationFromSearchParams
                ? countriesState?.selectedCountryToDisplay?.translations[
                    translationFromSearchParams
                  ]?.common || ""
                : countriesState?.selectedCountryToDisplay?.name.official || ""
            }
          />
          <CountryInfoBlock
            selectedCountry={countriesState?.selectedCountryToDisplay}
            renderInfo={renderInfo}
            deleteCountry={deleteCountry!}
          />
        </PresentationBlock>
      )}
      <NavigateButton
        to={"/countries"}
        label={t("backToCountriesBtnText")}
        sx={{ mt: "15px" }}
      />
    </Box>
  );
}
