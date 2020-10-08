const defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: true,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

let createdPlants = 0;

const initPlant = ({ id, breed, needsSun, origin, specialCare, size }) => {
  const waterFrequency = needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const savePlants = () => {
  const plants = JSON.stringify(defaultPlants);
  localStorage.setItem("plants", plants);
};

const getPlants = (allPlants) => {
  return allPlants;
};

const getPlantById = (plantId, allPlants) => {
  const id = Number(plantId);
  return allPlants.filter((plant) => plant.id === id);
};

const removePlantById = (plantId, allPlants) => {
  const id = Number(plantId);
  return allPlants.filter((plant) => plant.id !== id);
};

const getPlantsThatNeedsSunWithId = (plantId, allPlants) => {
  const id = Number(plantId);
  const filteredPlants = allPlants.filter((plant) => {
    if (plant.needsSun && plant.id === id) {
      if (plant.specialCare.waterFrequency > 2) {
        return plant;
      }
    }
  });
  return filteredPlants;
};

const editPlant = (plantId, newPlant, allPlants) => {
  const id = Number(plantId);
  return allPlants.map((plant) => {
    if (plant.id === id) {
      return newPlant;
    }
    return plant;
  });
};

const createNewPlantIncrement = () => createdPlants++;

const createNewPlant = (plant, allPlants, functionCall) => {
  const mappedPlant = initPlant(plant);
  functionCall();
  allPlants.push(mappedPlant);
  return allPlants;
};

module.exports = {
  createNewPlant,
  editPlant,
  getPlantsThatNeedsSunWithId,
  removePlantById,
  getPlantById,
  getPlants,
  savePlants,
  initPlant,
  createNewPlantIncrement,
  defaultPlants,
}
