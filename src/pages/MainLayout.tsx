import React from "react";
import { Outlet } from "react-router-dom";
import CountriesContext from "../contexts/CountriesContext";
import useCountries from "../hooks/Countries/useCountries";
import Header from "./Header/Header";
import { Box, SxProps } from "@mui/material";
import useViewportHeight from "../hooks/useViewportHeight";

export default function MainLayout() {
  const {
    countriesState,
    isCountriesLoading,
    updateSelectedCapital,
    updateSelectedTranslation,
    setCountryForDisplay,
    deleteCountry,
  } = useCountries();
  useViewportHeight();

  const styles: Record<string, SxProps> = {
    main: {
      height: "calc((var(--vh, 1vh) * 100) - 60px)",
      overflowY: "auto",
      maxWidth: "1200px",
      m: "0 auto",
      p: "15px 25px",
    },
  };
  return (
    <React.Fragment>
      <Header />
      <Box component={"main"} sx={styles.main}>
        <CountriesContext.Provider
          value={{
            countriesState,
            isCountriesLoading,
            updateSelectedCapital,
            updateSelectedTranslation,
            setCountryForDisplay,
            deleteCountry,
          }}
        >
          <Outlet />
        </CountriesContext.Provider>
      </Box>
    </React.Fragment>
  );
}
