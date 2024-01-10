// mock api calling to fetch data
export const fetchProducts = async () => {
    const response = await fetch('./mockData.json');
    const data = await response.json();
    console.log(data);
    return data;
  };