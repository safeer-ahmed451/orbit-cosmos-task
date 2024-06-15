import { ChildNode } from "@/types";
import MainHeader from "./header";
import MainFooter from "./footer";

export default function MainTemplate({ children }: ChildNode) {
  return(
    <>
      <MainHeader/>
      {children}
      <MainFooter/>
    </>
  );
}
