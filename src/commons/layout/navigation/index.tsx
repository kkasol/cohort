import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { MouseEvent } from "react";
const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const MenuItem = styled.div`
  font-size: 25px;
  margin: 0px 60px;
  color: white;
  user-select: none;
  cursor: pointer;
`;
export default function LayoutHeader(): JSX.Element {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(event.currentTarget.id);
  };

  const MENU_BAR = [
    { name: "BRAND", page: "/market" },
    { name: "CATEGORY", page: "/market" },
    { name: "LIFE", page: "/market" },
    { name: "BEAUTY", page: "/market" },
    { name: "#STYLE", page: "/market" },
    { name: "EVENT", page: "/market" },
    { name: "BEST", page: "/market" },
  ];

  return (
    <Wrapper>
      {MENU_BAR.map((el) => (
        <Fragment key={el.name}>
          <MenuItem id={el.name} onClick={onClickMenu}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
