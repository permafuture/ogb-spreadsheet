import { css } from 'styled-components';
import {  deepMerge } from 'grommet/utils/object';

export const grog = deepMerge({
  global: {
    animation: {
    duration: '0.5s',
    jiggle: {
      duration: '0.1s',
    },
    },
    colors: {
      background: 'accent-2',
      text: 'black',
    },
    font: {
      family: '"Alegreya","serif"',
      fontWeight: 800,
      size: "large",
    },
    selected: {
      background: 'accent-3',
      color: 'white',
    },
  },


  anchor: {
    extend: css`
      ${props => !props.plain && 'text-transform: uppercase; text-decoration-skip-ink: none'};
    `,
    textDecoration: 'none',
    fontWeight: 600,
    color: {
      dark: 'accent-1',
      light: 'brand',
    },
    hover: {
      textDecoration: 'wavy underline',
      extend: css`
        ${props => !props.plain && 'text-decoration-skip: ink;'};
      `,
      // fontWeight: undefined,
      // extend: undefined,
    },
      // extend: undefined,
  },

  button: {
    border: {
      // color: { dark: undefined, light: undefined }
      width: "4px",
      radius: 0,
      color: {
        dark: 'accent-2',
        light: 'accent-2',
      },
    },
    padding: {
      horizontal: '2rem',
      vertical: '.5rem'
    },
    fontWeight: 600,
    color: {
      dark: 'accent-2',
      light: 'accent-2',
    },

    extend: css`
      ${props => !props.plain && `
        font-weight: bold;
        text-transform: uppercase;
        font-size: 24px;
        font-height: 30px;
        div {
          flex-direction: column;
          justify-content: space-between;
        }
        `};
    `,
  },

  heading: {
    alignSelf: 'center',
    font: {
      family: '"Picture House One Bold", "sans-serif"',
      size: "200px",

    },
    extend: css`
      ${props => !props.plain && `
      text-transform: uppercase;
      text-shadow: 1px 1px 1px rGBA(255, 255, 255, .4), -1px -1px 1px rGBA(0, 0, 0, .1);
      text-align: center; `};
    `,
    level: {
      1: {
        font: {
          family: '"Picture House One Bold", "sans-serif"',
          size: " 200px",
          weight: "600",
        },
        extend: css`
          ${props => !props.plain && 'text-transform: uppercase;'};
        `,
      },
      2: {
        font: {
          family: '"Picture House One Bold", "sans-serif"',
          size: "200px",
        },
        extend: css`
          ${props => !props.plain && 'text-transform: uppercase;'};
        `,
      },
      3: {
        font: {
          family: '"Alegreya", "serif"',
        },
        extend: "text-transform: uppercase"
        },
      4: {
        font: {
          family: '"Picture House One Bold", "sans-serif"',
        },
        extend: css`
          ${props => !props.plain && 'text-transform: uppercase;'};
        `,
      },
      5: {
        font: {
          family: '"Picture House One Bold", "sans-serif"',
        },
        extend: css`
          ${props => !props.plain && 'text-transform: uppercase;'};
        `,
      },
      6: {
        font: {
          family: '"Picture House One Bold", "sans-serif"',
        },
        extend: "text-transform: uppercase"
      }
    }
    },
  paragraph: {
    extend: `
        text-align: justify;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        hyphens: auto;
        max-width: 100%;
        `
    },


});
