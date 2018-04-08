import { Theme } from '../types';

const accent = '#007acc';
const foreground = '#cccccc';
const background = '#333333';
const border = '#333333';

const banner = {
  foreground: '#f5f5f5'
};

const header = {
  foreground,
  background: '#2d2d2d',
  border,
  hoverForeground: '#f5f5f5',
  hoverBackground: background,
  activeForeground: '#f5f5f5',
  activeBackground: background
};

const sidebar = {
  foreground,
  background,
  border,
  hoverForeground: '#f5f5f5',
  hoverBackground: background,
  activeForeground: '#f5f5f5',
  activeBackground: background
};

const toolbar = {
  foreground,
  background: '#252526'
};

const panel = {
  background: '#1e1e1e'
};

const list = {
  foreground,
  background,
  hoverForeground: '#f5f5f5',
  hoverBackground: background
};

const listHead = {
  foreground,
  background: '#252526'
};

const dark: Theme = {
  accent,
  foreground,
  background,
  border,
  banner,
  header,
  sidebar,
  toolbar,
  panel,
  list,
  listHead
};

export { dark };
