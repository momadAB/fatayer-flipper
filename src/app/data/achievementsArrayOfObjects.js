const achievementsArrayOfObjects = [
  {
    id: 1,
    name: "Baby Steps",
    // Rewards
    priceAddition: 1,
    // Conditions
    clickCount: 50,
    // If achievement was claimed already
    wasClaimed: false,
    get description() {
      return `Click ${this.clickCount} times. Increases fatayer price by ${this.priceAddition}.`;
    },
  },
  {
    id: 2,
    name: "Get Sponsored on Talabat",
    // Rewards
    priceAddition: 3,
    // Conditions
    clickCount: 100,
    // If achievement was claimed already
    wasClaimed: false,
    get description() {
      return `Click ${this.clickCount} times. Increases fatayer price by ${this.priceAddition}.`;
    },
  },
];

export default achievementsArrayOfObjects;
