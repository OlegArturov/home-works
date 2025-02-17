import { createContext } from "react";
import { ICountriesInitialState } from "../stroreFromHookJustForEducation/countries/reducer";
import { IGetCountriesResponseCountryItem } from "../store/services/models/countries";

export type IUpdateSelectedCapital = (newCapitalId: string) => void;
export type IUpdateSelectedTranslation = (
  newTranslation: string | null
) => void;
export type ISetCoutryForDisplay = (
  country: IGetCountriesResponseCountryItem
) => void;
export type IDeleteCountry = (countryId: string) => void;

export interface ICountriesContext {
  countriesState: ICountriesInitialState | null;
  isCountriesLoading: boolean;
  updateSelectedCapital: IUpdateSelectedCapital | null;
  updateSelectedTranslation: IUpdateSelectedTranslation | null;
  setCountryForDisplay: ISetCoutryForDisplay | null;
  deleteCountry: IDeleteCountry | null;
}

const CountriesContext = createContext<ICountriesContext>({
  countriesState: null,
  isCountriesLoading: false,
  updateSelectedCapital: null,
  updateSelectedTranslation: null,
  setCountryForDisplay: null,
  deleteCountry: null,
});

export default CountriesContext;
