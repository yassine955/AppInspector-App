import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang="en"
      style={{
        position: 'relative',
        backgroundImage:
          'linear-gradient(rgb(0 150 201 / 10%), rgba(0, 0, 0, 0)), url(/background-network.svg)',

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Ensure the div takes up the full height of the screen,
        width: '100%',
      }}
      className="bg-backgroundBlue"
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
