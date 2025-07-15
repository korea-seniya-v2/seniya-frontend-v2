/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const containerStyle = css`
  max-width: 900px;
  min-height: 700px;
  margin: 30px auto;
  padding: 40px;
  border: 3px solid #4658AE;
  border-radius: 28px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const h6Style = css`
  font-weight: 600;
  font-size: 18px;
  margin: 0;
  color: #333;
  margin-bottom: 4px;
`;

export const inputStyle = css`
  margin-top: 4px;
  margin-bottom: 6px;
  border: 1px solid #5B6DC6;
  border-radius: 12px;
  font-size: 16px;
  height: 40px;
  padding: 0 15px;
  transition: all 0.3s ease;
  background: #fafafa;
  
  &:focus {
    outline: none;
    border: 3px solid #5B6DC6;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(91, 109, 198, 0.1);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: #999;
    font-weight: 400;
  }
  
  &:hover:not(:focus) {
    border-color: #4658AE;
    background: #fff;
  }
`;

export const timeContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
  margin-bottom: 6px;
  
  input {
    flex: 1;
    margin: 0;
  }
  
  span {
    font-size: 18px;
    font-weight: 500;
    color: #4658AE;
    background: #f8f9ff;
    padding: 6px 10px;
    border-radius: 8px;
    min-width: 20px;
    text-align: center;
  }
`;

export const selectStyle = css`
  margin-top: 4px;
  margin-bottom: 6px;
  border: 1px solid #5B6DC6;
  border-radius: 12px;
  font-size: 16px;
  height: 40px;
  padding: 0 15px;
  background: #fafafa;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border: 3px solid #5B6DC6;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(91, 109, 198, 0.1);
    transform: translateY(-2px);
  }
  
  &:hover:not(:focus) {
    border-color: #4658AE;
    background: #fff;
  }
  
  option {
    padding: 10px;
    background: #fff;
    color: #333;
    
    &:first-of-type {
      color: #999;
    }
  }
`;

export const buttonStyle = css`
  background: linear-gradient(135deg, #5B6DC6, #4658AE) !important;
  color: white !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  border: none !important;
  border-radius: 12px !important;
  width: 200px !important;
  height: 45px !important;
  min-height: 45px !important;
  max-height: 45px !important;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(91, 109, 198, 0.3);
  margin-top: 10px;
  padding: 0 !important;
  line-height: 45px !important;
  display: block !important;
  margin-left: auto !important;
  margin-right: 0 !important;
  
  &:hover {
    background: linear-gradient(135deg, #4658AE, #3d4a94) !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(91, 109, 198, 0.4);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(91, 109, 198, 0.3);
  }
`;

export const formGroupStyle = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
`;

export const titleStyle = css`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #4658AE;
  margin-bottom: 20px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #4658AE, #5B6DC6);
    border-radius: 2px;
  }
`;
