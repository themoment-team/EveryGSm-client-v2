import type { FC } from "react";
import * as S from "./style";
import Image, { ImageLoader } from "next/image"; // ImageLoader를 import
import * as I from "../../assets";
import { Contentstype } from "../../interface/Approve";
import { usePatchApprove, useDeleteApprove } from "api/admin";

interface ApproveItemProps {
  post: Contentstype;
}

const loader: ImageLoader = ({ src }) => {
  // src 값에 따라 이미지 경로를 처리하는 로직 작성
  // 유효한 URL로 반환해야 함
  return "https://pngimg.com/uploads/starbucks/starbucks_PNG3.png";
};

const ApproveItem: FC<ApproveItemProps> = ({
  post: {
    projectId,
    projectName,
    projectDescription,
    projectUrl,
    projectGithubUrl,
    projectLogoUri,
    creatorName,
    creatorDescription,
    creatorLogoUri,
    creatorGithubUrl,
    category,
    heartCount,
    createdAt,
  },
}) => {
  const patchApprove = () => {
    const result = confirm("승인하시겠습니까?");
    patchMutate(userSeq, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  const deleteApprove = () => {
    const result = confirm("거절하시겠습니까?");
    deleteMutate(userSeq, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  return (
    <S.ApproveItem>
      <S.ProjectWrap>
        <Image
          loader={loader} // loader를 Image 컴포넌트에 전달
          src={projectLogoUri ?? ""}
          alt="logouri"
          width={46}
          height={46}
        />
        <S.ProjectDescWrap>
          <S.Title>{projectName}</S.Title>
          <S.Creator>{creatorName}</S.Creator>
        </S.ProjectDescWrap>
      </S.ProjectWrap>
      <S.Approve>
        <button className="approve" onClick={patchApprove}>
          승인
        </button>
        <I.VerticalBarIcon />
        <button className="refuse" onClick={deleteApprove}>
          거절
        </button>
      </S.Approve>
    </S.ApproveItem>
  );
};

export default ApproveItem;
