import type { InquiryStatus } from "../inquiryStatus";

export interface GetMyInquiryResponseDto {
    inquiryId: number;
    title: string;
    status: InquiryStatus;
    createdAt: string;
    updatedAt: string;
    
}