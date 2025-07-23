import type { AxiosError } from "axios";

import type { InquiryResponseDto } from "../../dtos/inquiry/response/inquiry.response.dto";
import type ResponseDto from "../../dtos/response.dto";
import {
  axiosInstance,
  responseErrorHandler,
  responseSuccessHandler,
} from "../axiosConfig";
import {
  CREATE_INQUIRY_URL,
  DELETE_INQUIRY_URL,
  GET_ALL_INQUIRY_URL,
  GET_INQUIRY_DETAIL_URL,
  GET_MY_INQUIRY_URL
} from "../constants";
import type { InquiryRequestDto } from "../../dtos/inquiry/request/inquiry.request.dto";
import type { AllInquiryResponseDto } from "../../dtos/inquiry/response/inquiryList.response.dto";
import type { InquriyByIdResponseDto } from "../../dtos/inquiry/response/inquiryDetail.response";
import type { GetMyInquiryResponseDto } from "../../dtos/inquiry/response/myInquiry.response.dto";

export const tmp = "";

export const createInquiryRequest = async (
  dto: InquiryRequestDto,
  files?: File[] | null
): Promise<ResponseDto<InquiryResponseDto>> => {
  try {
        const formData = new FormData();
    formData.append(
      "dto",
      new Blob([JSON.stringify(dto)], { type: "application/json" })
    );
    if (files) {
      files?.forEach(file => formData.append("file", file));
    }
    const response = await axiosInstance.post(CREATE_INQUIRY_URL, formData, {
      withCredentials: true,
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const getMyInquiriesRequest = async (): Promise<ResponseDto<GetMyInquiryResponseDto[]>> => {
  try {
    const response = await axiosInstance.get(GET_MY_INQUIRY_URL, {
      withCredentials: true,
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}; 

export const getAllInquiriesRequest = async (): Promise<ResponseDto<AllInquiryResponseDto[]>> => {
  try {
    const response = await axiosInstance.get(GET_ALL_INQUIRY_URL, {
      withCredentials: true,
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const getInquiryDetailRequest = async (
  id: number
): Promise<ResponseDto<InquriyByIdResponseDto>> => {
  try {
    const response = await axiosInstance.get(GET_INQUIRY_DETAIL_URL(id), {
      withCredentials: true,
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const deleteInquiryRequest = async (
  id: number
): Promise<ResponseDto<void>> => {
  try {
    const response = await axiosInstance.delete(DELETE_INQUIRY_URL(id), {
      withCredentials: true,
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};