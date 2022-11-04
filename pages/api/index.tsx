import { productList } from "../../utils/data"

export const getCollectionList = (collectionName: string) => {
  return productList.filter((item) => item.category === collectionName);
}

export const getProductDetail = (slug: string) => {
  return productList.filter((item) => item.url === slug);
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

export const getSearchResults = (query: string) => {
  return productList.filter(product => product.name.toLocaleLowerCase().indexOf(query) !== -1)
}