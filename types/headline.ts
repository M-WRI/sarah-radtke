export interface IHeadlineProps {
  children: string | JSX.Element | JSX.Element[];
  type?: THeadlineType;
  center?: boolean;
  margin?: boolean;
  line?: boolean;
}

export type THeadlineType = "h1" | "h2" | "sanserif";
