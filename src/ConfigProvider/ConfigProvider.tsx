import React, { ReactNode, useContext } from 'react';
import { Locale } from '../locales/base';
import zhCN from '../locales/zh-CN';

type Config = {
  locale: Locale;
  theme?: 'light' | 'dark';
  input?: {
    clearIcon?: ReactNode;
  };
  popup?: {
    destroyOnClose?: boolean;
  };
  searchbar: {
    searchIcon?: ReactNode;
  };
};

export const defaultConfigRef: {
  current: Config;
} = {
  current: {
    locale: zhCN,
  },
};
export function getDefaultConfig() {
  return defaultConfigRef.current;
}

export function setDefaultConfig(config: Config) {
  defaultConfigRef.current = config;
}

const ConfigContext = React.createContext<Config | null>(null);

export type ConfigProviderProps = Partial<Config> & {
  children?: ReactNode;
};

export function useConfig() {
  return useContext(ConfigContext) ?? getDefaultConfig();
}

export const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  const { children, ...config } = props;
  const parentConfig = useConfig();
  return (
    <ConfigContext.Provider
      value={{
        ...parentConfig,
        ...config,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
