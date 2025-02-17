import { SxProps } from "@mui/material";
import { IGetCountriesResponseCountryItem } from "../../../../store/services/models/countries";

interface ICountryInfoBlockProps {
  selectedCountry: IGetCountriesResponseCountryItem | null | undefined;
  renderInfo: (
    data: object | string,
    styles: Record<string, SxProps>
  ) => React.JSX.Element;
  deleteCountry: (countryId: string) => void;
}

export type { ICountryInfoBlockProps };
