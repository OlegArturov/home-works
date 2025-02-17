import React from "react";
import useCapitalForm from "../../hooks/Countries/useCapitalForm";
import PageTitle from "../PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import Select from "../Select/Select";
import NavigateButton from "../NavigateButton/NavigateButton";

export default function CapitalFormComponent() {
  const { t } = useTranslation("base_translations", {
    keyPrefix: "pages.home.capitalForm",
  });
  const {
    countriesState,
    valuesForCapitalSelect,
    valuesForTranslationSelect,
    selectedCountryName,
    submitFormButtonPath,
    updateSelectedCapital,
    updateSelectedTranslation,
  } = useCapitalForm();

  return (
    <React.Fragment>
      <PageTitle text={t("mainTitle")} />
      <Select
        options={valuesForCapitalSelect}
        defaultValue={countriesState?.selectedCapital || ""}
        onChange={(newCapitalId) =>
          updateSelectedCapital!(String(newCapitalId))
        }
        selectLabel={t("capitalSelectLabel")}
      />
      <Select
        options={valuesForTranslationSelect}
        defaultValue={
          countriesState?.selectedTranslation ||
          valuesForTranslationSelect[0]?.value
        }
        onChange={(newTranslation) =>
          updateSelectedTranslation!(String(newTranslation))
        }
        selectLabel={t("translationSelectLabel")}
      />

      {selectedCountryName && (
        <NavigateButton
          to={submitFormButtonPath}
          label={t("submitButtonText", { countryName: selectedCountryName })}
          isFullWidth
          sx={{ mt: "15px" }}
        />
      )}
    </React.Fragment>
  );
}
