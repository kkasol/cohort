import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import { useRouter } from "next/router";
import LayoutFooter from "./footer";

interface ILayoutPageProps {
  children: JSX.Element;
}
const HIDDEN_LAYOUT = ["/"];

export default function LayoutPage(props: ILayoutPageProps): JSX.Element {
  const router = useRouter();
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);
  return (
    <>
      {!isHiddenLayout && <LayoutHeader />}
      {!isHiddenLayout && <LayoutNavigation />}

      {props.children}
      {<LayoutFooter />}
    </>
  );
}
