import { ReactNode } from "react";
import { Header } from "./header";

type LayoutProps = {
    children: ReactNode;
    title: string;
    back?: boolean;
    home?: boolean;
};

export const Layout = ({ children, title, back = true, home = true }: LayoutProps) => (
    <div className="max-w-[1024px] mx-auto px-4 pb-32">
        <Header title={title} home={home} back={back} />
        {children}
    </div>
)
