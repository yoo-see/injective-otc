import { atom } from "recoil";

export type TabType = "seller" | "buyer";

export interface ITabState {
  tab: TabType;
}

export const tabState = atom<ITabState>({
  key: "tabState",
  default: { tab: "buyer" },
});
