import { MapboxType } from "@/types";

const transformCoffeeData = (result: MapboxType) => {
  return {
    id: result.id,
    address: result.properties?.full_address || "",
    name: result.properties?.name || "",
    imgUrl:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
};

export const fetchCoffeeStores = async () => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/search/geocode/v6/forward?q=coffee&limit=6&proximity=-73.990593%2C40.740121&access_token=${process.env.MAPBOX_API}`
    );

    const data = await response.json();

    return data.features.map((result: MapboxType) =>
      transformCoffeeData(result)
    );
  } catch (error) {
    console.error("Error while fetch coffee stores", error);
  }
};
