import { css } from "@emotion/react";
import { InquiryStatus } from "../../dtos/inquiry/inquiryStatus";

export const containerStyle = css`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

export const titleStyle = css`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
`;

export const inputStyle = css`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const textareaStyle = css`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 200px;
  resize: vertical;
  box-sizing: border-box;
  white-space: pre-wrap;
  width: 100%;
`;

export const buttonContainerStyle = css`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

export const primaryButtonStyle = css`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const secondaryButtonStyle = css`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  background-color: #e9ecef;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #dee2e6;
  }
`;

export const listStyle = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const listItemStyle = css`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: center;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const adminListItemStyle = css`
  ${listItemStyle}
  grid-template-columns: 1fr 100px 120px;
  gap: 15px;
`;

export const itemInfoContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const itemTitleStyle = css`
  font-weight: bold;
  font-size: 1.1rem;
`;

export const itemMetaStyle = css`
  font-size: 0.9rem;
  color: #666;
`;

export const itemUsernameStyle = css`
  font-size: 1rem;
  color: #333;
  text-align: center;
`;

export const statusBadgeStyle = (status: InquiryStatus) => css`
  padding: 5px 10px;
  border-radius: 12px;
  font-weight: bold;
  color: white;
  text-align: center;
  background-color: ${status === InquiryStatus.COMPLETED ? "#28a745" : "#ffc107"};
`;

export const detailSectionStyle = css`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
`;

export const detailHeaderStyle = css`
  padding-bottom: 15px;
  border-bottom: 2px solid #f7f7f7;
`;

export const detailTitleStyle = css`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
`;

export const detailMetaStyle = css`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 0.9rem;
`;

export const detailContentStyle = css`
  padding: 20px 0;
  white-space: pre-wrap;
  min-height: 150px;
  line-height: 1.6;
`;

export const imageStyle = css`
  max-width: 100%;
  margin-top: 10px;
  width: 400px;
  height: auto;
  border-radius: 5px;
  border: 1px solid #eee;
`;

export const answerSectionStyle = css`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
`;

export const answerTitleStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const answerContentStyle = css`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
`;

export const answerAdminStyle = css`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const noAnswerStyle = css`
  color: #888;
  text-align: center;
  padding: 40px 0;
`;