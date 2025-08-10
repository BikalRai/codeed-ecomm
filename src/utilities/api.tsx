import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const getProducts = async () => axios.get(`${BASE_URL}/smartphones`);

export const getCategories = async () => axios.get(`${BASE_URL}/topCategories`);

export const getTopElectronics = async () =>
  axios.get(`${BASE_URL}/electronicsBrands`);

export const getDailyEssentials = async () =>
  axios.get(`${BASE_URL}/dailyEssentials`);
