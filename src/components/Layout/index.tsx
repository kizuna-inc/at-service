import { type childInterface } from "@/modules/interface/childInterface";

import { Navbar } from "./NavBar";
import { Footer } from "./Footer";

export const Layout = (child: childInterface) => {
  return (
    <div className="flex flex-col h-fit min-h-screen">
      <Navbar />
      <div className="h-fit min-h-[calc(100dvh-128px)]">{child.children}</div>
      <Footer />
    </div>
  );
};
