import useCountriesList from "../../hooks/Countries/useCountriesList";
import PresentationBlock from "../../components/PresentationBlock/PresentationBlock";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import CountriesList from "./components/CountriesList/CountriesList";

export default function Countries() {
  const { t } = useTranslation("base_translations", {
    keyPrefix: "pages.countries",
  });
  const { countriesState, isCountriesLoading, deleteCountry } =
    useCountriesList();

  return (
    <PresentationBlock>
      <PageTitle text={t("mainTitle")} />
      {!isCountriesLoading &&
        countriesState &&
        countriesState.countries.length > 0 && (
          <CountriesList
            countries={countriesState?.countries}
            deleteCountry={deleteCountry!}
          />
        )}
    </PresentationBlock>
  );
}
