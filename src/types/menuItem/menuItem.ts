import { JSXElementConstructor } from "react";

export interface IMenuItem {
  id: string;
  label: string;
  Icon: JSXElementConstructor<any>;
  render: "products" | "all" | "other";
  href: string;
}

export const enum EMenuItemRenderTypes {
  PRODUCTS = "products",
  ALL = "all",
  OTHER = "other",
}
