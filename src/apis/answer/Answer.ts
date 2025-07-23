import type { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import type { AnswerRequestDto } from "../../dtos/answer/request/answer.request.dto";
import type { AnswerResponseDto } from "../../dtos/answer/response/answer.response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { ANSWER_INQUIRY_URL } from "../constants";

export const createAnswerRequest = async (
  inquiryId: number,
  dto: AnswerRequestDto
): Promise<ResponseDto<AnswerResponseDto>> => {
  try {
    const response = await axiosInstance.post(ANSWER_INQUIRY_URL(inquiryId), dto, {
      withCredentials: true,
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};