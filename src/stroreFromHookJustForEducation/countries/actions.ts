import { IGetCountriesResponseCountryItem } from "../../store/services/models/countries";

export enum CountriesActionTypes {
  SET_COUNTRIES = "SET_COUNTRIES",
  SET_CAPITAL = "SET_CAPITAL",
  SET_TRANSLATION = "SET_TRANSLATION",
  SET_COUNTRY_FOR_DISPLAY = "SET_COUNTRY_FOR_DISPLAY",
  DELETE_COUNTRY = "DELETE_COUNTRY",
}

export type CountriesActions =
  | {
      type: CountriesActionTypes.SET_COUNTRIES;
      payload: IGetCountriesResponseCountryItem[];
    }
  | { type: CountriesActionTypes.SET_CAPITAL; payload: string | null }
  | { type: CountriesActionTypes.SET_TRANSLATION; payload: string | null }
  | {
      type: CountriesActionTypes.SET_COUNTRY_FOR_DISPLAY;
      payload: IGetCountriesResponseCountryItem | null;
    }
  | {
      type: CountriesActionTypes.DELETE_COUNTRY;
      payload: string;
    };

export const actionCreator = <T extends CountriesActions["type"]>(
  type: T,
  payload: Extract<CountriesActions, { type: T }>["payload"]
): CountriesActions => {
  return { type, payload } as CountriesActions;
};
