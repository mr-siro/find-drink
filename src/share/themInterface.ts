import {IFontSize, ISize} from './fontInterface';
export interface ITheme {
  font: {
    Regular: string;
    Medium: string;
    Bold: string;
    Light: string;
  };
  FontSize: IFontSize;
  Metrics: ISize;
  [key: string]: any;
}
