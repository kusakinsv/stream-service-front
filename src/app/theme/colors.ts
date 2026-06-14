export const getColors = () => {
  return {
    grey: {
      panelsMain: "#3a3d41",
      background: "#222222",
      panelsDark: "#2b2d31",
      textSecondary: "#b5bac1",
    },
    blue: {
      dark: '#4e34f7',       // темный оттенок для нажатых кнопок
      main: '#6862fd',       // основной цвет кнопок и акцентов
      light: '#8a85fe',      // более светлый оттенок для hover/активных состояний
    },
    white: {
      main: "#FFF",
      secondary: "#ECEDEE",
      opacity: {
        5: "#FFFFFF0D",
        60: "#FFFFFF99",
        50: "#ffffff80",
        20: "#FFFFFF33",
        13: "#FFFFFF21",
        10: "#FFFFFF1A",
        80: "#FFFFFFCC",
      },
    }
  }
}