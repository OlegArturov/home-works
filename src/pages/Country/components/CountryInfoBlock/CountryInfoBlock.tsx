import { Box, SxProps } from "@mui/material";
import { ICountryInfoBlockProps } from "./types";
import Button from "../../../../components/Button/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function CountryInfoBlock({
  selectedCountry,
  renderInfo,
  deleteCountry,
}: ICountryInfoBlockProps) {
  const { t } = useTranslation("base_translations", {
    keyPrefix: "pages.country",
  });
  const navigate = useNavigate();

  const styles: Record<string, SxProps> = {
    wrapper: {
      mt: "15px",
    },
    list: {
      p: 0,
      ml: "25px",
    },
    listItem: {
      p: 0,
      alignItems: "flex-start",
      display: "block",
    },
    listItemValue: {
      display: "inline-flex",
    },
    listItemKey: {
      display: "inline-flex",
      fontWeight: 600,
    },
  };

  return (
    selectedCountry && (
      <Box sx={styles.wrapper}>
        {renderInfo(selectedCountry, styles)}
        <Button
          color="error"
          label={t("deleteCountryBtnText")}
          type="button"
          isFullWidth
          onClick={() => {
            navigate("/countries");
            deleteCountry(selectedCountry.id);
          }}
          sx={{ mt: "15px" }}
        />
      </Box>
    )
  );
}
