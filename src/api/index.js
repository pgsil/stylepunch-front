export const getStyleList = async () => {
  let response = await fetch("https://35.229.92.76:3000/list");

  let data = await response.json();

  return data;
};

export const getCustomCSS = async stylesString => {
  let response = await fetch(`https://35.229.92.76:3000/list/${stylesString}`);

  let data = await response;

  return await data.text();
};
