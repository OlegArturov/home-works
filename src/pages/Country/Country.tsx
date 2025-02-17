import { Box } from "@mui/material";
import PresentationBlock from "../../components/PresentationBlock/PresentationBlock";
import PageTitle from "../../components/PageTitle/PageTitle";
import CountryInfoBlock from "./components/CountryInfoBlock/CountryInfoBlock";
import useCountry from "../../hooks/Countries/useCountry";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Country() {
  const { t } = useTranslation("base_translations", {
    keyPrefix: "pages.country",
  });
  const navigate = useNavigate();
  const {
    countriesState,
    translationFromSearchParams,
    isCountriesLoading,
    renderInfo,
    deleteCountry,
  } = useCountry();

  return (
    <Box>
      {!isCountriesLoading && (
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
      <Button
        color="primary"
        label={t("backToCountriesBtnText")}
        type="button"
        sx={{ mt: "15px" }}
        onClick={() => {
          navigate("/countries");
        }}
      />
    </Box>
  );
}
