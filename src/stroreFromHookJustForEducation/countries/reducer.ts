import { IGetCountriesResponseCountryItem } from "../../store/services/models/countries";
import { CountriesActions, CountriesActionTypes } from "./actions";

export interface ICountriesInitialState {
  countries: IGetCountriesResponseCountryItem[];
  selectedCapital: string | null;
  selectedTranslation: string | null;
  selectedCountryToDisplay: IGetCountriesResponseCountryItem | null;
}

const countriesInitialState: ICountriesInitialState = {
  countries: [],
  selectedCapital: null,
  selectedTranslation: null,
  selectedCountryToDisplay: null,
};

const updateTranslationValueOnCapitalChange = (
  newCapitalId: string,
  countries: IGetCountriesResponseCountryItem[]
) => {
  const selectedCountryInfo = countries.find(
    (country) => country.id === newCapitalId
  );
  return newCapitalId
    ? Object.keys(selectedCountryInfo!.translations)[0]
    : null;
};

const removeCountryFromList = (
  countryIdForRemove: string,
  countries: IGetCountriesResponseCountryItem[]
) => {
  return countries.filter((country) => country.id !== countryIdForRemove);
};

const reducer = (
  state: ICountriesInitialState = countriesInitialState,
  { type, payload }: CountriesActions
): ICountriesInitialState => {
  switch (type) {
    case CountriesActionTypes.SET_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };
    case CountriesActionTypes.SET_CAPITAL:
      return {
        ...state,
        selectedCapital: payload,
        selectedTranslation: updateTranslationValueOnCapitalChange(
          payload,
          state.countries
        ),
      };
    case CountriesActionTypes.SET_TRANSLATION:
      return { ...state, selectedTranslation: payload };
    case CountriesActionTypes.SET_COUNTRY_FOR_DISPLAY:
      return { ...state, selectedCountryToDisplay: payload };
    case CountriesActionTypes.DELETE_COUNTRY:
      return {
        ...state,
        selectedCountryToDisplay:
          payload === state?.selectedCapital
            ? null
            : state.selectedCountryToDisplay,
        countries: removeCountryFromList(payload, state.countries),
        selectedCapital:
          payload === state?.selectedCapital
            ? removeCountryFromList(payload, state.countries)[0]?.id
            : state.selectedCapital,
        selectedTranslation:
          payload === state?.selectedCapital
            ? updateTranslationValueOnCapitalChange(
                removeCountryFromList(payload, state.countries)[0]?.id,
                removeCountryFromList(payload, state.countries)
              )
            : state.selectedTranslation,
      };
    default:
      return state;
  }
};

export { reducer, countriesInitialState };
