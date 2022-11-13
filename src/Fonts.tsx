import { Global } from "@emotion/react";

const Fonts = () => (
    <Global
        styles={
            `@font-face {
                font-family: HKGrotesk;
                src: url('../public/hk-grotesk/OTF/HKGrotesk-Medium.otf');
                src: url('../public/hk-grotesk/TTF/HKGrotesk-Medium.ttf');
              }
              @font-face {
                font-family: OpenSans;
                src: url('../public/OpenSans/OpenSans-Light.ttf');
              }
              `
        }
    />
)

export default Fonts;