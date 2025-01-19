export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337/api"
    : "https://cms.shelleyandblaine.com/api";

export const IMAGE_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : "https://cms.shelleyandblaine.com";

export const API_KEY =
  "a081a87bb7e7e60794a31bceed5f835cd9261ecd45b37875c9486a0daa89a6a645838c4de112f3d4049710d3dbe0df93e8067d446ce3c9ed73a8ea50ef1754fe3c5f5db0269bea2b75475b8c8d4eabef92a71e9ed8334f3b1a8c41922f9d008bda3341ced48d3d58283f4029457e64d346b08d905a1bc12a0c56da5295741f70";
