import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

export const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BFF_URL,
  timeout: 5000,
});

export async function requestGet<Res>(url: string, config?: AxiosRequestConfig): Promise<Res> {
  const res = await instance.get<Res>(url, config);

  return res.data;
}

export async function requestPost<Res, Req>(url: string, req: Req, config?: AxiosRequestConfig): Promise<Res> {
  const res = await instance.post<Res>(url, req, config);

  return res.data;
}

export async function requestPut<Res, Req>(url: string, req: Req, config?: AxiosRequestConfig): Promise<Res> {
  const res = await instance.put<Res>(url, req, config);

  return res.data;
}

export async function requestDelete<Res>(url: string, config?: AxiosRequestConfig): Promise<Res> {
  const res = await instance.delete<Res>(url, config);

  return res.data;
}
