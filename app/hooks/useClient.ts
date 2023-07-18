// import countries from 'world-countries';

// const formattedCountries = countries.map((country) => ({
//   value: country.cca2,
//   label: country.name.common,
//   flag: country.flag,
//   latlng: country.latlng,
//   region: country.region,
// }));
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function getSession() {
    return await getServerSession(authOptions)
  }
  
const useCLient = async() => {
//   const getAll = () => formattedCountries;

//   const getByValue = (value: string) => {
//     return formattedCountries.find((item) => item.value === value);
//   }
const session = await getSession();

  return {
    session
  }
};

export default useCLient;
