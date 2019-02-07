import { css } from 'styled-components';
import Grommet from 'grommet';
import { deepFreeze } from 'grommet/utils/object';

export const grog = deepFreeze({
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
      fontWeight: 600,
      size: "large",
    },
  },
  anchor: {
    extend: css`
      ${props => !props.plain && 'text-transform: uppercase;'};
    `,
      textDecoration: 'none',
      fontWeight: 800,
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
      family: '"Picture House One Regular", "sans-serif"',
    },
    extend: css`
      ${props => !props.plain && 'text-transform: uppercase;'};
    `,
    level: {
      1: {
        font: {
          family: '"Picture House One Bold", "sans-serif"',
        }
      }
    }
  },

  paragraph: {
    size: "large",
  }
});
