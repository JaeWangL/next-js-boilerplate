import { appConfigs } from '@/configs';

export const wsTradesUrl = (markets: string[]): string => {
  return `${appConfigs.coincapWSEndpoints}/trades/${markets.join()}`;
};

export const wsPricesUrl = (coins: string[]): string => {
  return `${appConfigs.coincapWSEndpoints}/prices?assets=${coins.join()}`;
};
