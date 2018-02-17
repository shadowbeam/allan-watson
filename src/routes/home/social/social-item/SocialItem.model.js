// @flow
export default class SocialItem {
  icon: string;
  url: string;
  hex: string;
  icomoon: boolean;

  constructor(
    icon: string,
    url: string,
    hex: string,
    icoomon: boolean = false,
  ) {
    this.icon = icon;
    this.url = url;
    this.hex = hex;
    this.icomoon = icoomon;
  }
}
