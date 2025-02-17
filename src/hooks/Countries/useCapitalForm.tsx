import { useContext, useMemo } from "react";
import { ISelectOption } from "../../components/Select/SelectTypes";
import CountriesContext from "../../contexts/CountriesContext";
import { useNavigate } from "react-router-dom";
import { IGetCountriesResponseCountryItem } from "../../store/services/models/countries";

export default function useCapitalForm() {
  const navigate = useNavigate();
  const { countriesState, updateSelectedCapital, updateSelectedTranslation } =
    useContext(CountriesContext);

  const selectedCountry: IGetCountriesResponseCountryItem | undefined = useMemo(
    () =>
      countriesState?.countries.find(
        (country) => country.id === countriesState.selectedCapital
      ),
    [countriesState?.selectedCapital, countriesState?.countries]
  );

  const valuesForCapitalSelect: ISelectOption[] = useMemo(
    () =>
      countriesState?.countries.map((country) => ({
        label: country.flag + " " + country.capital[0],
        value: country.id,
      })) || [],
    [countriesState?.countries]
  );

  const valuesForTranslationSelect: ISelectOption[] = useMemo(() => {
    return selectedCountry
      ? Object.keys(selectedCountry.translations).map((translation) => ({
          label: translation,
          value: translation,
        }))
      : [];
  }, [selectedCountry]);

  const selectedCountryName: string = useMemo(() => {
    return selectedCountry && countriesState?.selectedTranslation
      ? selectedCountry.translations[countriesState.selectedTranslation].common
      : "";
  }, [selectedCountry, countriesState?.selectedTranslation]);

  const handleSubmitButtonClick = () => {
    const searchParams = new URLSearchParams({
      translation: countriesState!.selectedTranslation!,
    }).toString();
    navigate({
      pathname: `/countries/${selectedCountryName}`,
      search: `?${searchParams}`,
    });
  };

  return {
    countriesState,
    valuesForCapitalSelect,
    valuesForTranslationSelect,
    selectedCountryName,
    updateSelectedCapital,
    updateSelectedTranslation,
    handleSubmitButtonClick,
  };
}
