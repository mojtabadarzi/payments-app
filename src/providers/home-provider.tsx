import { ReactNode } from "react";
import { HomeContext } from "../contexts/use-home-context";
import { HomeContextProps } from "./../contexts/use-home-context"

export const HomeProvider = ({ props, children }: { props: HomeContextProps; children: ReactNode }) => (
    <HomeContext.Provider value={props}>{children}</HomeContext.Provider>
);