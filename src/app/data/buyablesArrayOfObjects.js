import nFormatter from "../helpers/nFormatter";

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
    goldenThresholds: [10, 25, 100, 1000],
    get description() {
      return `Increases fatayer per click by ${this.perClickIncrease}`;
    },
  },
  {
    price: 15,
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
    goldenThresholds: [10, 25, 100, 1000],
    get description() {
      return `Bakes ${this.passiveIncomeIncrease} fatayer per second`;
    },
  },
  {
    price: 100,
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
    goldenThresholds: [10, 25, 100, 1000],
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
    goldenThresholds: [10, 25, 100, 1000],
    get description() {
      return `Bakes ${this.passiveIncomeIncrease} fatayer per second`;
    },
  },
  {
    price: 2000,
    id: 5329,
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
      return `Multiplies fatayer per click by ${this.fatayerMultiplier + 1}`;
    },
  },

  {
    price: 3000,
    id: 4,
    name: "Golden Rolling Pin",
    passiveIncomeIncrease: 10,
    initialPassiveIncomeIncrease: 10,
    perClickIncrease: 0,
    initialPerClickIncrease: 0,
    count: 0,
    multiplier: 1,
    fatayerMultiplier: 0,
    singleUpgrade: false,
    disabled: false,
    upgradePrice: 7500,
    upgradedMultiplier: 25,
    goldenThresholds: [10, 25, 100, 1000],
    get description() {
      return `Rolls ${this.passiveIncomeIncrease} fatayer dough per second`;
    },
  },

  {
    price: 10000,
    id: 5,
    name: "Master Baker's Apron",
    passiveIncomeIncrease: 40,
    initialPassiveIncomeIncrease: 40,
    perClickIncrease: 0,
    initialPerClickIncrease: 0,
    count: 0,
    multiplier: 1,
    fatayerMultiplier: 0,
    singleUpgrade: false,
    disabled: false,
    upgradePrice: 10000,
    upgradedMultiplier: 30,
    goldenThresholds: [10, 25, 100, 1000],
    get description() {
      return `Adds ${this.passiveIncomeIncrease} fatayer per second`;
    },
  },

  {
    price: 40000,
    id: 6,
    name: "Fatayer Assembly Line",
    passiveIncomeIncrease: 100,
    initialPassiveIncomeIncrease: 100,
    perClickIncrease: 0,
    initialPerClickIncrease: 0,
    count: 0,
    multiplier: 1,
    fatayerMultiplier: 0,
    singleUpgrade: false,
    disabled: false,
    upgradePrice: 15000,
    upgradedMultiplier: 40,
    goldenThresholds: [10, 25, 100, 1000],
    get description() {
      return `Produces ${this.passiveIncomeIncrease} fatayer per second on an automated line`;
    },
  },

  {
    price: 200000,
    id: 7,
    name: "The Sultan's Oven",
    passiveIncomeIncrease: 400,
    initialPassiveIncomeIncrease: 400,
    perClickIncrease: 0,
    initialPerClickIncrease: 0,
    count: 0,
    multiplier: 1,
    fatayerMultiplier: 0,
    singleUpgrade: false,
    disabled: false,
    upgradePrice: 25000,
    upgradedMultiplier: 50,
    goldenThresholds: [10, 25, 100, 1000],
    get description() {
      return `Bakes ${this.passiveIncomeIncrease} royal fatayer per second`;
    },
  },

  {
    price: 1337420,
    id: 8,
    name: "Magic Dough",
    passiveIncomeIncrease: 6543,
    initialPassiveIncomeIncrease: 6543,
    perClickIncrease: 0,
    initialPerClickIncrease: 0,
    count: 0,
    multiplier: 1,
    fatayerMultiplier: 0,
    singleUpgrade: false,
    disabled: false,
    upgradePrice: 50000,
    upgradedMultiplier: 100,
    goldenThresholds: [10, 25, 100, 1000],
    get description() {
      return `Magically creates ${nFormatter(
        this.passiveIncomeIncrease
      )} fatayer per second`;
    },
  },
  {
    price: 38000000,
    id: 9,
    name: "Fatayermancer",
    passiveIncomeIncrease: 44000,
    initialPassiveIncomeIncrease: 44000,
    perClickIncrease: 0,
    initialPerClickIncrease: 0,
    count: 0,
    multiplier: 1,
    fatayerMultiplier: 0,
    singleUpgrade: false,
    disabled: false,
    upgradePrice: 50000,
    upgradedMultiplier: 100,
    goldenThresholds: [10, 25, 100, 1000],
    get description() {
      return `Resurrects ${nFormatter(
        this.passiveIncomeIncrease
      )} fatayer per second`;
    },
  },
  {
    price: 500000000,
    id: 10,
    name: "Abdullah",
    passiveIncomeIncrease: 220000,
    initialPassiveIncomeIncrease: 220000,
    perClickIncrease: 0,
    initialPerClickIncrease: 0,
    count: 0,
    multiplier: 1,
    fatayerMultiplier: 0,
    singleUpgrade: false,
    disabled: false,
    upgradePrice: 50000,
    upgradedMultiplier: 100,
    goldenThresholds: [10, 25, 100, 1000],
    get description() {
      return `(Ex) Owner of the greatest fatayer place in town. Makes ${nFormatter(
        this.passiveIncomeIncrease
      )} fatayer per second`;
    },
  },
  {
    price: 5000000000,
    id: 11,
    name: "Automated Factory",
    passiveIncomeIncrease: 1000000,
    initialPassiveIncomeIncrease: 1000000,
    perClickIncrease: 0,
    initialPerClickIncrease: 0,
    count: 0,
    multiplier: 1,
    fatayerMultiplier: 0,
    singleUpgrade: false,
    disabled: false,
    upgradePrice: 50000,
    upgradedMultiplier: 100,
    goldenThresholds: [10, 25, 100, 1000],
    get description() {
      return `Makes ${nFormatter(
        this.passiveIncomeIncrease
      )} fatayer per second`;
    },
  },
  {
    price: 100000000000,
    id: 12,
    name: "Moon Colony",
    passiveIncomeIncrease: 5000000,
    initialPassiveIncomeIncrease: 5000000,
    perClickIncrease: 0,
    initialPerClickIncrease: 0,
    count: 0,
    multiplier: 1,
    fatayerMultiplier: 0,
    singleUpgrade: false,
    disabled: false,
    upgradePrice: 50000,
    upgradedMultiplier: 100,
    goldenThresholds: [10, 25, 100, 1000],
    get description() {
      return `Makes ${nFormatter(
        this.passiveIncomeIncrease
      )} fatayer per second`;
    },
  },
];

export default buyablesArrayOfObjects;
