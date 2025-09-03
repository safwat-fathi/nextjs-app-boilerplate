import { ReadonlyURLSearchParams } from "next/navigation";

import { IParams } from "@/types/services";

export const createQueryString = (
  name: string,
  value: string,
  searchParams: ReadonlyURLSearchParams,
) => {
  const params = new URLSearchParams(searchParams);
  params.set(name, value);

  return params.toString();
};

export function createParams(params: IParams): any {
  const searchParams = new URLSearchParams();

  if (!params) return searchParams;

  // Use Object.keys to avoid iterating over prototype properties
  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (Array.isArray(value)) {
      value.forEach((v) => searchParams.append(key + "[]", v));
    } else if (value) {
      searchParams.set(key, value);
    }
  });

  return searchParams;
}

export function revertParamsToObj(params: ReadonlyURLSearchParams): IParams {
  const obj = [...params?.entries()].reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

  return obj;
}
