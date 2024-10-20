const achievementsArrayOfObjects = [
  {
    id: 5,
    name: "YouAreFat",
    // Rewards
    priceAddition: 1,
    // Conditions
    clickCount: 0,
    fatayerCountCondition: 20,
    // If achievement was claimed already
    wasClaimed: false,
    get description() {
      return `Make ${this.fatayerCountCondition} fatayer. Increase fatayer price`;
    },
  },
  {
    id: 1,
    name: "Baby Steps",
    // Rewards
    priceAddition: 1,
    // Conditions
    clickCount: 50,
    fatayerCountCondition: 0,
    // If achievement was claimed already
    wasClaimed: false,
    get description() {
      return `Click ${this.clickCount} times. Increases fatayer price.`;
    },
  },
  {
    id: 2,
    name: "Get Sponsored on Talabat",
    // Rewards
    priceAddition: 1,
    // Conditions
    clickCount: 100,
    fatayerCountCondition: 0,
    // If achievement was claimed already
    wasClaimed: false,
    get description() {
      return `Click ${this.clickCount} times. Increases fatayer price.`;
    },
  },
  {
    id: 3,
    name: "Put Up A Billboard Ad",
    // Rewards
    priceAddition: 1,
    // Conditions
    clickCount: 1000,
    fatayerCountCondition: 0,
    // If achievement was claimed already
    wasClaimed: false,
    get description() {
      return `Click ${this.clickCount} times. Increases fatayer price.`;
    },
  },
  {
    id: 4,
    name: "Get Government Subsidies",
    // Rewards
    priceAddition: 1,
    // Conditions
    clickCount: 5000,
    fatayerCountCondition: 0,
    // If achievement was claimed already
    wasClaimed: false,
    get description() {
      return `Click ${this.clickCount} times. Increases fatayer price.`;
    },
  },
];

export default achievementsArrayOfObjects;
