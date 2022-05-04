import { buildings, buildingSample, Tfeatures } from './sample';

const requirement = ["gym", "school", "store"];
// 1. We want to know the ideal building that have all requirements
// 2. We should value each building by their features
// 3. Find your answer

// The nearest building to me is the first one!

// Table
//           0   1   2   3   4
// gym       1   0   0   1   2
// school    0   1   0   0   0
// store     4   3   2   1   0

const valueOfFeatures: Record<Tfeatures, number[]> = {
  gym: new Array<number>(buildings.length).fill(Number.MAX_VALUE),
  school: new Array<number>(buildings.length).fill(Number.MAX_VALUE),
  store: new Array<number>(buildings.length).fill(Number.MAX_VALUE),
};


function checkTheFeature(feature: Tfeatures, buildingNumber: number): boolean {
  const featureExists = buildings[buildingNumber][feature];
  if (featureExists)
    valueOfFeatures[feature][buildingNumber] = 0;
  return featureExists;
}

function findTheNearest(feature: Tfeatures, myBuildingNumber: number) {
  for (let neighbours = 0; neighbours < buildings.length; neighbours++) {
    if (myBuildingNumber === neighbours) continue;
    if (buildings[neighbours][feature]) {
      valueOfFeatures[feature][myBuildingNumber] =
        Math.min(valueOfFeatures[feature][myBuildingNumber], Math.abs(neighbours - myBuildingNumber));
    }
  }
}


function main() {
  for (let i = 0; i < buildings.length; i++) {
    requirement.forEach( (req: any) => {
      if (!checkTheFeature(req, i)) {
        findTheNearest(req, i);
      }
    })
  }

  // Two iteration of building * feature

  for (let i = 0; i < buildings.length; i++) {

  }
  // O(n2 + n)

  // O(n*m)
  console.table(valueOfFeatures);
}

main();
