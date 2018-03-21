export const getStyleList = async () => {
  let response = await fetch("https://stylepunch-api.herokuapp.com/list");

  let data = await response.json();

  return data;
};

export const getCustomCSS = async stylesString => {
  let response = await fetch(`https://stylepunch-api.herokuapp.com/styles/${stylesString}`);

  let data = await response;

  return await data.text();
};
