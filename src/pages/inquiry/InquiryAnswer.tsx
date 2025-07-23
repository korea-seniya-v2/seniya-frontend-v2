/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header";
import { getInquiryDetailRequest } from "../../apis/inquiry/Inquiry";
import { createAnswerRequest } from "../../apis/answer/Answer";
import type { InquriyByIdResponseDto } from "../../dtos/inquiry/response/inquiryDetail.response";
import type { AnswerRequestDto } from "../../dtos/answer/request/answer.request.dto";
import {
  containerStyle,
  titleStyle,
  textareaStyle,
  buttonContainerStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
} from "../inquiry/inquiry.style";
import { css } from "@emotion/react";

const sectionStyle = css`
  margin-bottom: 30px;
`;

const sectionTitleStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  border-bottom: 2px solid #eee;
  padding-bottom: 5px;
`;

const inquiryContentStyle = css`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
  white-space: pre-wrap;
  min-height: 100px;
  line-height: 1.6;
`;

function InquiryAnswer() {
  const { id } = useParams<{ id: string }>();
  const inquiryId = Number(id);
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState<InquriyByIdResponseDto | null>(null);
  const [answerContent, setAnswerContent] = useState("");

  useEffect(() => {
    const fetchInquiry = async () => {
      if (isNaN(inquiryId)) {
        alert("잘못된 접근입니다.");
        navigate("/");
        return;
      }
      const response = await getInquiryDetailRequest(inquiryId);
      if (response.code === "SU" && response.data) {
        setInquiry(response.data);
        if (response.data.answer) {
          alert("이미 답변이 등록된 문의입니다.");
          navigate(`/inquiry/${inquiryId}`);
        }
      } else {
        alert("문의 정보를 불러오는 데 실패했습니다.");
        navigate("/inquiries");
      }
    };
    fetchInquiry();
  }, [inquiryId, navigate]);

  const handleSubmit = async () => {
    if (!answerContent.trim()) {
      alert("답변 내용을 입력해주세요.");
      return;
    }

    const dto: AnswerRequestDto = { content: answerContent };
    const response = await createAnswerRequest(inquiryId, dto);

    if (response.code === "SU") {
      alert("답변이 성공적으로 등록되었습니다.");
      navigate(`/inquiry/${inquiryId}`);
    } else {
      alert(response.message || "답변 등록에 실패했습니다.");
    }
  };

  return (
    <>
      <Header />
      <div css={containerStyle}>
        <h1 css={titleStyle}>문의 답변 작성</h1>
        {inquiry && (
          <div css={sectionStyle}>
            <h2 css={sectionTitleStyle}>문의 내용</h2>
            <h3>{inquiry.title}</h3>
            <p>작성자: {inquiry.username}</p>
            <div css={inquiryContentStyle}>{inquiry.content}</div>
          </div>
        )}
        <div css={sectionStyle}>
          <h2 css={sectionTitleStyle}>답변 입력</h2>
          <textarea
            css={textareaStyle}
            placeholder="답변을 입력하세요."
            value={answerContent}
            onChange={(e) => setAnswerContent(e.target.value)}
          />
        </div>
        <div css={buttonContainerStyle}>
          <button css={secondaryButtonStyle} onClick={() => navigate(-1)}>
            취소
          </button>
          <button css={primaryButtonStyle} onClick={handleSubmit}>
            답변 등록
          </button>
        </div>
      </div>
    </>
  );
}

export default InquiryAnswer;