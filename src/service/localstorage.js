export const getListVehicles = () => {
  if (!localStorage["vehicles"]) {    
    localStorage["vehicles"] = "[]";
  }

  let vehicles = localStorage["vehicles"];
  vehicles = JSON.parse(vehicles);
  return vehicles;
};

export const addVehicle = (vehicle) => {
  const vehicles = getListVehicles();
  vehicles.push(vehicle);
  localStorage["vehicles"] = JSON.stringify(vehicles);
};

export const removeVehicle = (id) => {
  let vehicles = getListVehicles();
  vehicles = vehicles.filter((vehicle) => vehicle.id !== id);
  localStorage["vehicles"] = JSON.stringify(vehicles);
};

export const getVehicleById = (id) => {
  const vehicles = getListVehicles();
  const vehicle = vehicles.find((vehicle) => vehicle.id === id);
  return vehicle;
};

export const editVehicle = (id, newVehicle) => {
  let vehicles = getListVehicles();
  vehicles = vehicles.filter((vehicle) => vehicle.id !== id);
  vehicles.push(newVehicle);
  localStorage["vehicles"] = JSON.stringify(vehicles);
};