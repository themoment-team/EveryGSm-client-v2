import type { FC } from "react";
import * as S from "./style";
import ApproveItem from "admin/components/ApproveItem";
import { Contentstype } from "admin/interface/Approve";
import Link from "next/link";
import { css } from "@emotion/react";
interface ApproveItemListProps {
  postList?: Contentstype[];
}

const ApproveItemList: FC<ApproveItemListProps> = ({ postList }) => {
  return (
    <S.ApproveItemList>
      {postList?.map((post, key) => (
        <Link
          href={`/post/${post.projectId}`}
          key={key}
          css={css`
            text-decoration: none;
          `}
        >
          <ApproveItem post={post} />
        </Link>
      ))}
    </S.ApproveItemList>
  );
};

export default ApproveItemList;
