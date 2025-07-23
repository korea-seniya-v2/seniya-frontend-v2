/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyInquiriesRequest } from "../../apis/inquiry/Inquiry";
import type { GetMyInquiryResponseDto } from "../../dtos/inquiry/response/myInquiry.response.dto";
import Header from "../../components/header";
import { InquiryStatus } from "../../dtos/inquiry/inquiryStatus";
import {
  containerStyle,
  titleStyle,
  listStyle,
  listItemStyle,
  itemInfoContainerStyle,
  itemTitleStyle,
  itemMetaStyle,
  statusBadgeStyle,
  primaryButtonStyle,
  buttonContainerStyle,
} from "../inquiry/inquiry.style";

function MyInquiryListPage() {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState<GetMyInquiryResponseDto[]>([]);

  useEffect(() => {
    const fetchMyInquiries = async () => {
      const response = await getMyInquiriesRequest();
      if (response.code === "SU" && response.data) {
        setInquiries(response.data);
      } else {
        alert("문의 목록을 불러올 수 없습니다.");
        setInquiries([]);
      }
    };
    fetchMyInquiries();
  }, []);

  const handleItemClick = (inquiryId: number) => {
    navigate(`/inquiry/${inquiryId}`);
  };

  return (
    <>
      <Header />
      <div css={containerStyle}>
        <h1 css={titleStyle}>나의 문의</h1>
        <div css={buttonContainerStyle}>
          <button css={primaryButtonStyle} onClick={() => navigate("/inquiry")}>
            문의하기
          </button>
        </div>
        <ul css={listStyle}>
          {inquiries.length > 0 ? (
            inquiries.map((inquiry) => (
              <li
                key={inquiry.inquiryId}
                css={listItemStyle}
                onClick={() => handleItemClick(inquiry.inquiryId)}
              >
                <div css={itemInfoContainerStyle}>
                  <div css={itemTitleStyle}>{inquiry.title}</div>
                  <div css={itemMetaStyle}>
                    {new Date(inquiry.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <div css={statusBadgeStyle(inquiry.status)}>
                  {inquiry.status === InquiryStatus.COMPLETED
                    ? "답변완료"
                    : "대기중"}
                </div>
              </li>
            ))
          ) : (
            <p>작성한 문의가 없습니다.</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default MyInquiryListPage;