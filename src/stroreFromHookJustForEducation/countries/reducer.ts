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
  newCapitalId: string | null,
  state: ICountriesInitialState
) => {
  const selectedCountryInfo = state.countries.find(
    (country) => country.id === newCapitalId
  );
  return newCapitalId && selectedCountryInfo
    ? Object.keys(selectedCountryInfo.translations)[0]
    : state.selectedTranslation;
};

const updateTranslationOnCountryRemove = (
  countryIdForRemove: string,
  state: ICountriesInitialState
) => {
  const updatedCountries = removeCountryFromList(
    countryIdForRemove,
    state.countries
  );
  return countryIdForRemove === state.selectedCapital
    ? Object.keys(updatedCountries[0].translations)[0]
    : state.selectedTranslation;
};

const updateSelectedCapitalOnCountryRemove = (
  countryIdForRemove: string,
  state: ICountriesInitialState
) => {
  return countryIdForRemove === state?.selectedCapital
    ? removeCountryFromList(countryIdForRemove, state.countries)[0]?.id
    : state.selectedCapital;
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
          state
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
        selectedCapital: updateSelectedCapitalOnCountryRemove(payload, state),
        selectedTranslation: updateTranslationOnCountryRemove(payload, state),
      };
    default:
      return state;
  }
};

export { reducer, countriesInitialState };
