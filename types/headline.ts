export interface IHeadlineProps {
  children: string | JSX.Element | JSX.Element[];
  type?: THeadlineType;
  center?: boolean;
  margin?: boolean;
}

export type THeadlineType = "h1" | "h2";
