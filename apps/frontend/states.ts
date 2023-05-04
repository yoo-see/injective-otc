import { atom } from "recoil";

export interface ITabState {
  tab: "Buyer" | "Seller";
}

export const tabState = atom<ITabState>({
  key: "tabState",
  default: { tab: "Buyer" },
});
