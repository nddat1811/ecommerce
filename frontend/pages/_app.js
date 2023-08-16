import "../styles/globals.css";
import { Provider } from "urql";
import { createClient, cacheExchange, fetchExchange } from "@urql/core";
import Nav from "@/components/Nav";
import { StateContext } from "@/lib/context";

const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_API,
  exchanges: [cacheExchange, fetchExchange],
});

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Provider value={client}>
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </StateContext>
  );
}
