import type { InquiryStatus } from "../inquiryStatus";

export interface InquiryResponseDto {
    inquiryId: number;
    title: string;
    content: string;
    InquiryImageUrl: string[];
    createdAt: string;
    updatedAt: string;
    
}