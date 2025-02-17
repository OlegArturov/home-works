interface ITranslationItem {
  official: string;
  common: string;
}

interface ICurrencyItemData {
  name: string;
  symbol: string;
}

interface IGetCountriesResponseCountryItem {
  id: string;
  name: ITranslationItem;
  currencies: Record<string, ICurrencyItemData>;
  capital: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  flag: string;
  translations: Record<string, ITranslationItem>;
}

export type {
  IGetCountriesResponseCountryItem,
  ITranslationItem,
  ICurrencyItemData,
};
