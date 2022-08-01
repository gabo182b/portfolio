const screenSizes = {
    tablet: '768px',
    desktop: '1024px',
    xlScreen: '1600px'
}

export const device = {
    tablet: `(min-width:${screenSizes.tablet})`, //min-width = from
    laptop: `(min-width:${screenSizes.desktop})`,
    xlScreen: `(min-width:${screenSizes.xlScreen})`
}

export const fontSizes = {
    sizeSm: '1rem',
    sizeMd: '2rem',
    sizeMdLg: '2.8rem',
    sizeLg: '3.5rem',
    sizeXl: '4.20rem',
    sizeXxl: '5.5rem'
}

export const colors = {
    mainColor: '#0E0C15',
    secondaryColor: '#221A2B',
    buttonBackground: '#5A4D83',
    buttonText: '#CDCCCC',
    buttonTextHover: '#FFFFFF',
    projectCardHover: '#E2E2E1',
    white: '#FFFFFF'
}
