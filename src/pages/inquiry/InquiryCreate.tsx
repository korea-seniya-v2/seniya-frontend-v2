/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { InquiryRequestDto } from "../../dtos/inquiry/request/inquiry.request.dto";
import { createInquiryRequest } from "../../apis/inquiry/Inquiry";
import Header from "../../components/header";
import {
  containerStyle,
  titleStyle,
  formStyle,
  inputStyle,
  textareaStyle,
  buttonContainerStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
} from "../inquiry/inquiry.style"

function InquiryCreate() {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력하세요.");
      return;
    }

    const dto: InquiryRequestDto = { title, content };
    const response = await createInquiryRequest(dto, files);

    if (response.code === "SU") {
      alert("문의가 등록되었습니다.");
      navigate("/inquiries/me");
    } else {
      alert(response.message || "문의 등록에 실패했습니다.");
    }
  };

  return (
    <>
      <Header />
      <div css={containerStyle}>
        <h1 css={titleStyle}>문의 작성</h1>
        <form onSubmit={handleSubmit} css={formStyle}>
          <input
            css={inputStyle}
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            css={textareaStyle}
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            css={inputStyle}
            type="file"
            multiple
            onChange={handleFileChange}
          />
          <div css={buttonContainerStyle}>
            <button type="button" css={secondaryButtonStyle} onClick={() => navigate(-1)}>
              취소
            </button>
            <button type="submit" css={primaryButtonStyle}>
              등록
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default InquiryCreate;