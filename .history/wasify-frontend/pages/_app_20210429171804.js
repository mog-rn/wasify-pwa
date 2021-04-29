import 'tailwindcss/tailwind.css'
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp
