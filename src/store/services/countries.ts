import { api } from "./api";
import { IGetCountriesResponseCountryItem } from "./models/countries";

export const countriesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCountries: build.query<IGetCountriesResponseCountryItem[], void>({
      query: () => ({
        url: "countries",
      }),
    }),
  }),
});

export const { useGetCountriesQuery, endpoints: getCountries } = countriesApi;
