const defaultSettings = {
  colors: {
    neutral: '#777777',
    primary: '#0077cc',
    secondary: '#3300cc',
    highlight: '#efeffe',
    accent: '#660099',
  },
}

const STORAGE_NAME = 'SETTINGS'

export function getSettings() {
  const settings = localStorage.getItem(STORAGE_NAME)
  return settings ? JSON.parse(settings) : defaultSettings
}

export function setSettings(settings) {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(settings))
}
