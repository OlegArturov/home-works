import { useContext, useEffect } from "react";
import CountriesContext from "../../contexts/CountriesContext";
import { useParams, useSearchParams } from "react-router-dom";
import { IGetCountriesResponseCountryItem } from "../../store/services/models/countries";
import { List, ListItem, SxProps, Typography } from "@mui/material";

export default function useCountry() {
  const {
    countriesState,
    isCountriesLoading,
    updateSelectedCapital,
    updateSelectedTranslation,
    setCountryForDisplay,
    deleteCountry,
  } = useContext(CountriesContext);

  const [searchParams] = useSearchParams();
  const translationFromSearchParams = searchParams.get("translation");

  const { country: countryNameFromParams } = useParams();

  useEffect(() => {
    if (countryNameFromParams && countriesState?.countries.length) {
      const selectedCountry: IGetCountriesResponseCountryItem | undefined =
        countriesState.countries.find((country) =>
          translationFromSearchParams
            ? country.translations[translationFromSearchParams].common ===
              countryNameFromParams
            : country.name.official === countryNameFromParams
        );

      setCountryForDisplay!(selectedCountry || null);

      if (selectedCountry) {
        updateSelectedCapital!(selectedCountry.id);
        updateSelectedTranslation!(translationFromSearchParams);
      }
    }
  }, [
    countryNameFromParams,
    translationFromSearchParams,
    countriesState?.countries,
  ]);

  const capitalizeFirstLetter = (string: string) => {
    return string[0].toUpperCase() + string.slice(1, string.length);
  };

  const renderInfo = (
    data: object | string,
    styles: Record<string, SxProps>
  ) => {
    switch (true) {
      case Array.isArray(data):
        return (
          <List sx={styles.list}>
            {data.map((el, index) => (
              <ListItem key={index} sx={styles.listItem}>
                <Typography sx={styles.listItemValue}>{el}</Typography>
              </ListItem>
            ))}
          </List>
        );
      case typeof data === "object":
        return (
          <List sx={styles.list}>
            {Object.keys(data as object).map(
              (dataKey: string, index: number) =>
                dataKey !== "id" && (
                  <ListItem key={index} sx={styles.listItem}>
                    <Typography sx={styles.listItemKey}>
                      {capitalizeFirstLetter(dataKey)}:
                    </Typography>{" "}
                    {renderInfo(
                      (data as Record<string, string | object>)[dataKey],
                      styles
                    )}
                  </ListItem>
                )
            )}
          </List>
        );
      default:
        return <Typography sx={styles.listItemValue}>{data}</Typography>;
    }
  };

  return {
    countriesState,
    isCountriesLoading,
    translationFromSearchParams,
    renderInfo,
    deleteCountry,
  };
}
