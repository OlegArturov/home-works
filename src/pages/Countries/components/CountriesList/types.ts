import { IGetCountriesResponseCountryItem } from "../../../../store/services/models/countries";

interface ICountriesListProps {
  countries: IGetCountriesResponseCountryItem[] | undefined;
  deleteCountry: (countryId: string) => void;
}

export type { ICountriesListProps };
