import type { AppProps } from 'next/app';
import { Open_Sans, Playfair_Display, Sacramento } from 'next/font/google';
import '../styles/globals.css';

export const openSans = Open_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export const sacramento = Sacramento({
  weight: '400',
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>
      {`
        :root {
          --font-open-sans: ${openSans.style.fontFamily};
          --font-playfair: ${playfair.style.fontFamily};
          --font-special: ${sacramento.style.fontFamily};
        }
      `}
    </style>
    <Component {...pageProps} />
  </>
);

export default App;
