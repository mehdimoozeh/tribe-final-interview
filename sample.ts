export type buildingSample = {
  gym: boolean;
  school: boolean;
  store: boolean;
}

export type Tfeatures = keyof buildingSample;

export const buildings: buildingSample[] = [
  {
    "gym": false, // 1
    "school": true, // 0
    "store": false, // 4
    // 4
  },
  {
    "gym": true,
    "school": false,
    "store": false,
  },
  {
    "gym": true,
    "school": true,
    "store": false,
  },
  {
    "gym": false, // 1
    "school": true, // 0
    "store": false, // 1
    // 1
  },
  {
    "gym": false,
    "school": true,
    "store": true,
  },
]
