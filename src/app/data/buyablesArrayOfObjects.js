const buyablesArrayOfObjects = [
  {
    price: 5,
    id: 1,
    name: "Kneading Station",
    passiveIncomeIncrease: 0,
    initialPassiveIncomeIncrease: 0,
    perClickIncrease: 1,
    initialPerClickIncrease: 1,
    priceIncrease: 0,
    // description: `Increases fatayer per click by ${this.perClickIncrease}`,
    count: 0,
    multiplier: 1,
    fatayerMultiplier: 0,
    singleUpgrade: false,
    disabled: false,
    upgradePrice: 500,
    upgradedMultiplier: 5,
    goldenThresholds: [2, 10],
    get description() {
      return `Increases fatayer per click by ${this.perClickIncrease}`;
    },
  },
  {
    price: 25,
    id: 350,
    name: "Cookeez Toy Oven",
    passiveIncomeIncrease: 1,
    initialPassiveIncomeIncrease: 1,
    perClickIncrease: 0,
    initialPerClickIncrease: 0,
    priceIncrease: 0,
    count: 0,
    multiplier: 1,
    fatayerMultiplier: 0,
    singleUpgrade: false,
    disabled: false,
    upgradePrice: 5000,
    upgradedMultiplier: 20,
    goldenThresholds: [10],
    get description() {
      return `Bakes ${this.passiveIncomeIncrease} fatayer per second`;
    },
  },
  {
    price: 250,
    id: 2,
    name: "Spice Rack Expansion",
    passiveIncomeIncrease: 0,
    initialPassiveIncomeIncrease: 0,
    perClickIncrease: 5,
    initialPerClickIncrease: 5,
    priceIncrease: 0,
    count: 0,
    multiplier: 1,
    fatayerMultiplier: 0,
    singleUpgrade: false,
    disabled: false,
    upgradePrice: 5000,
    upgradedMultiplier: 20,
    goldenThresholds: [10],
    get description() {
      return `Increases fatayer per click by ${this.perClickIncrease}`;
    },
  },
  {
    price: 1000,
    id: 3,
    name: "Brick Oven",
    passiveIncomeIncrease: 5,
    initialPassiveIncomeIncrease: 5,
    perClickIncrease: 0,
    initialPerClickIncrease: 0,
    count: 0,
    multiplier: 1,
    fatayerMultiplier: 0,
    singleUpgrade: false,
    disabled: false,
    upgradePrice: 5000,
    upgradedMultiplier: 20,
    goldenThresholds: [10],
    get description() {
      return `Bakes ${this.passiveIncomeIncrease} fatayer per second`;
    },
  },
  {
    price: 2000,
    id: 5,
    name: "Dough Mixer 3000",
    passiveIncomeIncrease: 0,
    initialPassiveIncomeIncrease: 0,
    perClickIncrease: 0,
    initialPerClickIncrease: 0,
    count: 0,
    multiplier: 1,
    fatayerMultiplier: 1,
    singleUpgrade: true,
    disabled: false,
    goldenThresholds: [],
    get description() {
      return `Multiplies fatayer per click of buildings by ${
        this.fatayerMultiplier + 1
      }`;
    },
  },

  //   name: "Golden Rolling Pin",
  //   name: "Master Baker's Apron",
  //   name: "Fatayer Assembly Line",
  //   name: "The Sultan's Oven",
  //   name: "Magic Dough",
];

export default buyablesArrayOfObjects;
