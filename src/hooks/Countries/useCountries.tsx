import { useEffect, useReducer } from "react";
import {
  countriesInitialState,
  ICountriesInitialState,
  reducer,
} from "../../stroreFromHookJustForEducation/countries/reducer";
import { useGetCountriesQuery } from "../../store/services/countries";
import {
  actionCreator,
  CountriesActionTypes,
} from "../../stroreFromHookJustForEducation/countries/actions";
import { IGetCountriesResponseCountryItem } from "../../store/services/models/countries";

export default function useCountries() {
  const [countriesState, countriesDisplatch] = useReducer(
    reducer,
    countriesInitialState as ICountriesInitialState
  );

  const { data: countries, isLoading: isCountriesLoading } =
    useGetCountriesQuery();

  const setSelectedCountryForDefaultCapital = (
    countries: IGetCountriesResponseCountryItem[]
  ) => {
    const CAPITAL = "Kyiv";
    const countryUkraineForSet = countries.find((country) =>
      country.capital.includes(CAPITAL)
    );
    return countryUkraineForSet ? countryUkraineForSet : countries[0];
  };

  useEffect(() => {
    if (countries) {
      countriesDisplatch(
        actionCreator(CountriesActionTypes.SET_COUNTRIES, countries)
      );
      countriesDisplatch(
        actionCreator(
          CountriesActionTypes.SET_CAPITAL,
          setSelectedCountryForDefaultCapital(countries).id
        )
      );
    }
  }, [countries]);

  const updateSelectedCapital = (newCapitalId: string) => {
    countriesDisplatch(
      actionCreator(CountriesActionTypes.SET_CAPITAL, newCapitalId)
    );
  };

  const updateSelectedTranslation = (newTranslation: string) => {
    countriesDisplatch(
      actionCreator(CountriesActionTypes.SET_TRANSLATION, newTranslation)
    );
  };

  const setCountryForDisplay = (country: IGetCountriesResponseCountryItem) => {
    countriesDisplatch(
      actionCreator(CountriesActionTypes.SET_COUNTRY_FOR_DISPLAY, country)
    );
  };

  const deleteCountry = (countryId: string) => {
    countriesDisplatch(
      actionCreator(CountriesActionTypes.DELETE_COUNTRY, countryId)
    );
  };

  return {
    countriesState,
    isCountriesLoading,
    updateSelectedCapital,
    updateSelectedTranslation,
    setCountryForDisplay,
    deleteCountry,
  };
}
