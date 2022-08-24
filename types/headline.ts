export interface IHeadlineProps {
  children: string | JSX.Element | JSX.Element[];
  type?: THeadlineType;
  center?: boolean;
}

export type THeadlineType = "h1" | "h2";
