import { productList } from "../../utils/mockData"

export const getCollectionList = (collectionName: string) => {
  const response = productList.filter((item) => item.category === collectionName);
  return response;
}

export const getProductDetail = (slug: string) => {
  const response = productList.filter((item) => item.url === slug);
  return response;
}

export const getRandomProductList = () => {
  const randomIndex = [];
  const randomProductList = [];
  while (randomIndex.length < 4) {
    const random = Math.floor(Math.random() * productList.length);
    if (randomIndex.indexOf(random) === -1) {
      randomIndex.push(random);
      randomProductList.push(productList[random]);
    }
  }
  return randomProductList;
}