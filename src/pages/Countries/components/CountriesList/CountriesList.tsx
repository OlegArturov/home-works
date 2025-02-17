import { List, ListItem, SxProps, Typography } from "@mui/material";
import Button from "../../../../components/Button/Button";
import { useTranslation } from "react-i18next";
import { ICountriesListProps } from "./types";
import { Link } from "react-router-dom";

export default function CountriesList({
  countries,
  deleteCountry,
}: ICountriesListProps) {
  const { t } = useTranslation("base_translations", {
    keyPrefix: "pages.countries",
  });

  const styles: Record<string, SxProps> = {
    listItem: {
      justifyContent: "space-between",
    },
  };

  return (
    <List>
      {countries?.map((country, index) => (
        <ListItem key={index} sx={styles.listItem}>
          <Link to={country.name.official}>
            <Typography>
              {country.flag}
              {country.name.official}
            </Typography>
          </Link>
          <Button
            color="error"
            label={t("deleteCountryBtnText")}
            type="button"
            isFullWidth
            onClick={() => {
              deleteCountry(country.id);
            }}
            sx={{ ml: "15px", width: "130px" }}
          />
        </ListItem>
      ))}
    </List>
  );
}
