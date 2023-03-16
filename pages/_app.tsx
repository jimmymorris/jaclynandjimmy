import type { AppProps } from 'next/app';
import { Open_Sans, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';

export const openSans = Open_Sans({
  subsets: ['latin'],
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>
      {`
        :root {
          --font-open-sans: ${openSans.style.fontFamily};
          --font-playfair: ${playfair.style.fontFamily};
        }
      `}
    </style>
    <Component {...pageProps} />
  </>
);

export default App;
