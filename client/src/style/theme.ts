import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  // / colors
  background: '#ffffff',
  green: '#5FCD8B',
  LIGHT_GREENISH_BLUE: '#55efc4',
  FADED_POSTER: '#81ecec',
  GREEN_DARNER_TAIL: '#74b9ff',
  SHY_MOMENT: '#a29bfe',
  CITY_LIGHT: '#dfe6e9',
  MINT_LEAF: '#00b894',
  ROBINS_EGG_BLUE: '#00cec9',
  ELECTRON_BLUE: '#0984e3',
  EXODUS_FRUIT: '#6c5ce7',
  SMOOTHING_BREEZE: '#b2bec3',
  SOUR_LEMON: '#ffeaa7',
  FIRST_DATA: '#fab1a0',
  PINK_GLAMOUR: '#ff7675',
  PICO_8_PINK: '#fd79a8',
  AMERICAN_RIVER: '#636e72',
  BRIGHT_YARROW: '#fdcb6e',
  ORANGEVILLE: '#e17055',
  CHI_CONG: '#d63031',
  PRUNUS_AVIUM: '#e84393',
  DRACULA_ORCHID: '#2d3436',
  BORDER_GRAY: '#dddddd',
  WARN_GEAY: '#F2F3F5',

  BLOR_TEXT: '#757575',

  // Color in Crafolio logo
  CRA_PURPLE: '#343E7A',
  CRA_YELLOW: '#FBE99E',

  PALE_CRA_PURPLE: '#525d9c',

  // box-shadow
  BOX_SHADOW: 'rgba(0, 0, 0, 0.2) 0px 5px 13px',
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
