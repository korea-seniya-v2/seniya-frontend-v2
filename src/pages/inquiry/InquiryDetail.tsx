/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { InquriyByIdResponseDto } from "../../dtos/inquiry/response/inquiryDetail.response";
import {
  deleteInquiryRequest,
  getInquiryDetailRequest,
} from "../../apis/inquiry/Inquiry";
import Header from "../../components/header";
import { useUserStore } from "../../stores/user.store";
import {
  containerStyle,
  titleStyle,
  detailSectionStyle,
  detailHeaderStyle,
  detailTitleStyle,
  detailMetaStyle,
  detailContentStyle,
  imageStyle,
  answerSectionStyle,
  answerTitleStyle,
  answerContentStyle,
  answerAdminStyle,
  noAnswerStyle,
  buttonContainerStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
} from "../inquiry/inquiry.style";

function InquiryDetail() {
  const { id } = useParams<{ id: string }>();
  const inquiryId = Number(id);
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState<InquriyByIdResponseDto | null>(null);
  const { user } = useUserStore();

  useEffect(() => {
    const fetchInquiry = async () => {
      if (isNaN(inquiryId)) {
        alert("잘못된 접근입니다.");
        navigate("/");
        return;
      }
      const response = await getInquiryDetailRequest(inquiryId);
      if (response.code === "SU" && response.data) {
        console.log(response.data);
        setInquiry(response.data);
      } else {
        alert(response.message || "문의를 불러오는 데 실패했습니다.");
        navigate(-1);
      }
    };
    fetchInquiry();
  }, [inquiryId, navigate]);

  const deleteInquiry = async () => {
    if (window.confirm("정말로 문의를 삭제하시겠습니까?")) {
      const response = await deleteInquiryRequest(inquiryId);
      if (response.code === "SU") {
        alert("게시글이 삭제되었습니다.");
        navigate("/inquiries/me");
      } else {
        alert(response.message || "삭제에 실패했습니다.");
      }
    }
  };

  const isAdmin = user?.role_id === 1;
  const isAuthor = user?.username === inquiry?.username;

  return (
    <>
      <Header />
      <div css={containerStyle}>
        <h1 css={titleStyle}>문의 상세</h1>
        <div css={detailSectionStyle}>
          <div css={detailHeaderStyle}>
            <h2 css={detailTitleStyle}>{inquiry?.title}</h2>
            <p css={detailMetaStyle}>
              <strong>{inquiry?.username}</strong>
              <span>
                {inquiry?.createdAt &&
                  new Date(inquiry.createdAt).toLocaleString()}
              </span>
            </p>
          </div>
          <div css={detailContentStyle}>
            {inquiry?.content}
            {inquiry?.inquiryImageUrl && inquiry.inquiryImageUrl.length > 0 && (
              <div>
                {inquiry.inquiryImageUrl.map((url, index) => (
                  <img
                    key={index}
                    src={`http://localhost:8080${url}`}
                    alt={`첨부 이미지 ${index + 1}`}
                    css={imageStyle}
                  />
                ))}
              </div>
            )}
          </div>
          <div css={answerSectionStyle}>
            <h2 css={answerTitleStyle}>문의 답변</h2>
            {inquiry?.answer ? (
              <div css={answerContentStyle}>
                <p css={answerAdminStyle}>{inquiry?.admin || "관리자"}</p>
                <div>{inquiry.answer}</div>
              </div>
            ) : (
              <div css={noAnswerStyle}>아직 답변이 등록되지 않았습니다.</div>
            )}
          </div>
          <div css={buttonContainerStyle}>
            {isAdmin && !inquiry?.answer && (
              <button
                css={primaryButtonStyle}
                onClick={() => navigate(`/admin/inquiry/${inquiryId}/answer`)}
              >
                답변하기
              </button>
            )}
            {isAuthor && (
              <button css={secondaryButtonStyle} onClick={deleteInquiry}>
                삭제
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default InquiryDetail;