export const getStyleList = async () => {
  let response = await fetch("https://api.stylepunch.club/list");

  let data = await response.json();

  return data;
};

export const getCustomCSS = async stylesString => {
  let response = await fetch(`https://api.stylepunch.club/list/${stylesString}`);

  let data = await response;

  return await data.text();
};
