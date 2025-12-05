import axios from "axios"

const base_url = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  params: {
    maxResults: "100",
  },
  headers: {
    "x-rapidapi-key": "573b9a226emsh63584b79a507ec1p12d9d4jsnc3b524f46203",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};


export const Api = {
    async fetching(url) {
        const response = await axios.get(`${base_url}/${url}`, options)
        return response.data
    }
}