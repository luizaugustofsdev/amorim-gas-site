import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://amorimgas.com.br", lastModified: new Date() },
    { url: "https://amorimgas.com.br/gas-no-itapua", lastModified: new Date() },
    { url: "https://amorimgas.com.br/agua-mineral-no-itapua", lastModified: new Date() },
    { url: "https://amorimgas.com.br/entrega-de-gas-brasilia", lastModified: new Date() },
  ];
}
