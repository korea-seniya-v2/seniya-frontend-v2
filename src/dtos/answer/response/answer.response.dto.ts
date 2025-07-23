import type { InquiryStatus } from "../../inquiry/inquiryStatus";

export interface AnswerResponseDto {
  userName: string;
  title: string;
  inquiryContent: string;
  inquiryImageUrl: string[];
  admin: string;
  answerContent: string;
  status: InquiryStatus;
  createdAt: string;
  updatedAt: string;
}