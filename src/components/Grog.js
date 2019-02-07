import { css } from 'styled-components';
import Grommet from 'grommet';
import { deepFreeze, deepMerge } from 'grommet/utils/object';

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
    },
    font: {
      family: '"Alegreya","serif"',
      fontWeight: 800,
      size: "large",
    },
  },
  anchor: {
    extend: css`
      ${props => !props.plain && 'text-transform: uppercase;'};
    `,
      textDecoration: 'none',
      fontWeight: 600,
      color: {
        dark: 'accent-1',
        light: 'brand',
      },
      hover: {
        textDecoration: 'wavy underline',
        // fontWeight: undefined,
        // extend: undefined,
      },
      // extend: undefined,
  },
  button: {
    extend: css`
      ${props => !props.plain && 'font-weight: bold;'};
    `,
  },
  heading: {
    font: {
      family: '"Picture House One Bold", "sans-serif"',
      size: "200px",
    },
    extend: css`
      ${props => !props.plain && 'text-transform: uppercase;'};
    `,
    level: {
      1: {
        font: {
          family: '"Picture House One Bold", "sans-serif"',
          size: " 200px",
        },
        extend: css`
          ${props => !props.plain && 'text-transform: uppercase;'};
        `,
      },
      2: {
        font: {
          family: '"Picture House One Bold", "sans-serif"',
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
    extend: "text-align: justify; "
    }
});
