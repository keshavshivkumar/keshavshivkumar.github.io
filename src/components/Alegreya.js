import { Global } from '@mantine/core';

export function Alegreya() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Alegreya-Sans',
            src: `url('/alegreya-sans/AlegreyaSans-Light.otf') format('opentype')`,
            fontWeight: 800,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Alegreya-Sans',
            src: `url('/alegreya-sans/AlegreyaSansSC-ExtraBold.otf') format('opentype')`,
            fontWeight: 900,
            fontStyle: 'normal',
          },
        },
        {
          'h1, h2, h3, h4': {
            fontFamily: 'Alegreya-Sans, sans-serif',
            fontWeight: 800,
          },
          'body': {
            fontFamily: 'Alegreya-Sans, sans-serif',
            fontWeight: 500,
          },
        },
      ]}
    />
  );
}
