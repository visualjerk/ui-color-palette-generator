const STORAGE_NAME = 'USER_THEME'

export const defaultTheme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512],
  sizes: [12, 16, 20, 24, 32, 48, 64, 128, 256, 480, 640, 800, 1024],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000000',
    background: '#ffffff',
    primary: '#0077cc',
    secondary: '#3300cc',
    muted: '#f6f6f6',
    highlight: '#efeffe',
    grey: '#777777',
    accent: '#660099',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  links: {
    nav: {
      color: 'text',
      px: 2,
      py: 2,
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        bg: 'highlight',
      },
    },
  },
  shadows: [
    '0 1px 2px 0 rgba(0,0,0,0.3)',
    '0 1px 2px 0 rgba(0,0,0,0.1), 0 1px 4px 0 rgba(0,0,0,0.2)',
    '0 1px 2px 0 rgba(0,0,0,0.1), 0 3px 8px 0 rgba(0,0,0,0.2)',
    '0 1px 2px 0 rgba(0,0,0,0.1), 0 4px 12px 0 rgba(0,0,0,0.2)',
  ],
  radii: {
    small: '4px',
    rounded: '2em',
    circle: '50%',
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
    },
    muted: {
      color: 'text',
      bg: 'background',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
}

export function getTheme() {
  const theme = localStorage.getItem(STORAGE_NAME)
  return theme ? JSON.parse(theme) : defaultTheme
}

export function setTheme(theme) {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(theme))
}
