import { ExternalServerError } from "../domain/external-server-error";
import { NotFoundError } from "../domain/not-found-error";
import { QueryParam } from "../domain/query-param";
import { UnauthorizedError } from "../domain/unauthorized-error";

const MOBILE_API_URL = "https://prueba-tecnica-api-tienda-moviles.onrender.com";

type FetchOptions = RequestInit & {
  queryParams?: QueryParam;
};

export async function fetchApi<T>(
  url: string,
  { queryParams, ...options }: FetchOptions = {},
): Promise<T> {
  const queryString = queryParams
    ? `?${new URLSearchParams(queryParams as Record<string, string>).toString()}`
    : "";

  const response = await fetch(`${MOBILE_API_URL}/${url}${queryString}`, {
    headers: {
      "x-api-key": process.env.MOBILE_API_KEY || "",
    },
    next: { revalidate: +(process.env.CACHE_EXPIRATION_TIME ?? 0) },
    ...options,
  });

  if (response.status === 401) {
    throw new UnauthorizedError("Invalid API key");
  }

  if (response.status === 404) {
    throw new NotFoundError("Not found");
  }

  if (response.status !== 200) {
    throw new ExternalServerError("Failed to fetch data");
  }

  return response.json();
}
