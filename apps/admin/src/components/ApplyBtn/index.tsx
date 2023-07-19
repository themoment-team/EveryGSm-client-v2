import type { FC } from "react";
import * as S from "./style";
import { PlusIcon } from "admin/assets";
import { useState } from "react";
interface ApplyBtnProps {}

const ApplyBtn: FC<ApplyBtnProps> = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };
  console.log(isActive);

  return (
    <div onClick={handleClick}>
      <S.ApplyBtn className={isActive ? "active" : ""}>
        <PlusIcon />
      </S.ApplyBtn>
    </div>
  );
};

export default ApplyBtn;
