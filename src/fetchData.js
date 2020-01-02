import contentfulApiConfig from "../config.json";

const fetchData = (callback, loading) => {
  const API_BASE_URL = "https://cdn.contentful.com";
  const API_SPACE_ID = contentfulApiConfig.env.CONTENTFUL_SPACE_ID;
  const API_TOKEN = contentfulApiConfig.env.CONTENTFUL_ACCESS_TOKEN;
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}`
  );
  xhr.onreadystatechange = () => {
    /*
        if (xhr.readyState === 3) {
          requestAnimationFrame(_ => loading.removeAttribute("hidden"));
        }
        */
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      console.log(response);
      callback(response);
      //requestAnimationFrame(_ => loading.setAttribute("hidden", "true"));
    }
  };
  if (loading) {
    xhr.onloadstart = _ =>
      requestAnimationFrame(_ => loading.removeAttribute("hidden"));
    xhr.onerror = e => console.log(e);
    xhr.onloadend = _ =>
      requestAnimationFrame(_ => loading.setAttribute("hidden", "true"));
  }
  xhr.send();
};

export default fetchData;