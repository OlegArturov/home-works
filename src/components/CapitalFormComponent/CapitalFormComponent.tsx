import React from "react";
import useCapitalForm from "../../hooks/Countries/useCapitalForm";
import PageTitle from "../PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import Select from "../Select/Select";
import Button from "../Button/Button";

export default function CapitalFormComponent() {
  const { t } = useTranslation("base_translations", {
    keyPrefix: "pages.home.capitalForm",
  });
  const {
    countriesState,
    valuesForCapitalSelect,
    valuesForTranslationSelect,
    selectedCountryName,
    updateSelectedCapital,
    updateSelectedTranslation,
    handleSubmitButtonClick,
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
        <Button
          label={t("submitButtonText", { countryName: selectedCountryName })}
          onClick={handleSubmitButtonClick}
          type="button"
          color="primary"
          sx={{ mt: "15px" }}
          isFullWidth
        />
      )}
    </React.Fragment>
  );
}
