import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

interface UnsplashResponse {
  results: any[];
  total_pages: number;
}

interface GetImgParams {
  query: string;
  page: number;
}

export const getImg = async ({
  query,
  page,
}: GetImgParams): Promise<UnsplashResponse> => {
  const { data } = await axios.get("search/photos", {
    headers: {
      Authorization: "Client-ID 3epLdoRXfdB02LB_Es4o_55chXkvzZ56DNswKj1YESs",
    },
    params: {
      query,
      page,
      per_page: 12,
    },
  });

  return data;
};
