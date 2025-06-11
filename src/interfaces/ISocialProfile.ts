import type { ILink } from "./ILink";

export interface ISocialProfile {
  src: string;
  name: string;
  location: string;
  description: string;
  links: ILink[]
}