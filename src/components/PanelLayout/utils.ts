import { Orientation } from './PanelLayout';

const reduceCSSCalc: any = require('reduce-css-calc');

export const isHorizontal = (orientation: Orientation) => orientation === 'horizontal';

export const isFlexible = (size: number | string): size is number => typeof size === 'number';

export const calc = (size: string) => reduceCSSCalc(`calc(${size})`);
