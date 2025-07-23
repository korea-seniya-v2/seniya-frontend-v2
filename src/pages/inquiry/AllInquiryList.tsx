/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import { getAllInquiriesRequest } from "../../apis/inquiry/Inquiry";
import type { AllInquiryResponseDto } from "../../dtos/inquiry/response/inquiryList.response.dto";
import { InquiryStatus } from "../../dtos/inquiry/inquiryStatus";
import { useUserStore } from "../../stores/user.store";
import AdminSidebar from "../../components/admin/AdminSidebar";
import {
  containerStyle,
  titleStyle,
  listStyle,
  adminListItemStyle,
  itemInfoContainerStyle,
  itemTitleStyle,
  itemMetaStyle,
  itemUsernameStyle,
  statusBadgeStyle,
} from "../inquiry/inquiry.style";

function AllInquiries() {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const [inquiries, setInquiries] = useState<AllInquiryResponseDto[]>([]);

  useEffect(() => {
    const fetchAllInquiries = async () => {
      const response = await getAllInquiriesRequest();
      if (response.code === "SU" && response.data) {
        setInquiries(response.data);
      } else {
        alert("전체 문의 목록을 불러오는 데 실패했습니다.");
        setInquiries([]);
      }
    };

    fetchAllInquiries();
  }, [user, navigate]);

  const handleItemClick = (inquiryId: number) => {
    navigate(`/inquiry/${inquiryId}`);
  };

  return (
    <>
      <Header />
      <div css={containerStyle}>
        <AdminSidebar />
        <h1 css={titleStyle}>전체 문의 관리</h1>
        <ul css={listStyle}>
          {inquiries.length > 0 ? (
            inquiries.map((inquiry) => (
              <li
                key={inquiry.inquiryId}
                css={adminListItemStyle}
                onClick={() => handleItemClick(inquiry.inquiryId)}
              >
                <div css={itemInfoContainerStyle}>
                  <div css={itemTitleStyle}>{inquiry.title}</div>
                  <span css={itemMetaStyle}>
                    {new Date(inquiry.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <span css={itemUsernameStyle}>{inquiry.username}</span>
                <div css={statusBadgeStyle(inquiry.status)}>
                  {inquiry.status === InquiryStatus.COMPLETED
                    ? "답변 완료"
                    : "대기중"}
                </div>
              </li>
            ))
          ) : (
            <p>등록된 문의가 없습니다.</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default AllInquiries;