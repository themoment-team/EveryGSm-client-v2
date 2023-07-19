import type { FC } from "react";
import * as S from "./style";
import Image from "next/image";
import { Input } from "admin/components";
interface InputBoxProps {
  title: string;
}

const InputBox: FC<InputBoxProps> = ({ title }) => {
  return (
    <S.InputBox>
      <S.Title>{title}</S.Title>
      <Input placeholder="텍스트를 입력해주세요" />
    </S.InputBox>
  );
};

export default InputBox;
