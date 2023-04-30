import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/commons/styles/globalStyles";
import LayoutPage from "../src/commons/layout";
import ApolloSetting from "../src/commons/apollo";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />

          <LayoutPage>
            <Component {...pageProps} />;
          </LayoutPage>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
