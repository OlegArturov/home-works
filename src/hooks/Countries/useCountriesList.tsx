import { useContext } from "react";
import CountriesContext from "../../contexts/CountriesContext";

export default function useCountriesList() {
  const { countriesState, deleteCountry, isCountriesLoading } =
    useContext(CountriesContext);
  return { countriesState, isCountriesLoading, deleteCountry };
}
