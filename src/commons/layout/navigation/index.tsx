import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { MouseEvent } from "react";
const Wrapper = styled.div`
  width: 100vh;
  height: 100px;
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
    { name: "BRAND", page: "/boards" },
    { name: "CATEGORY", page: "/market" },
    { name: "LIFE", page: "/mypage" },
    { name: "BEAUTY", page: "/boards" },
    { name: "#STYLE", page: "/market" },
    { name: "EVENT", page: "/mypage" },
    { name: "BEST", page: "/mypage" },
  ];

  return (
    <Wrapper>
      {MENU_BAR.map((el) => (
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={onClickMenu}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
