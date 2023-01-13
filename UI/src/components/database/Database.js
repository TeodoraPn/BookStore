export const COLOURS = {
  white: "#ffffff",
  black: "#000000",
  green: "#00AC76",
  red: "#C04345",
  blue: "#021D59",
  backgroundLight: "#CBB199",
  backgroundDark: "#222D31",
};

export const Items = [
  {
    id: 1,
    category: "product",
    productName: "The subtle art of not giving a fuck",
    productPrice: 5,
    description:
      "The Subtle Art of Not Giving a F*ck argues that individuals should seek to find meaning through what they find to be important and only engage in values that they can control.",
    isOff: true,
    offPercentage: 20,
    productImage: require("../../../assets/images/TheSubtleArt.jpeg"),
    productImageList: [
      require("../../../assets/images/TheSubtleArt.jpeg"),
      require("../../../assets/images/TheSubtleArt.jpeg"),
      require("../../../assets/images/TheSubtleArt.jpeg"),
    ],
  },
  {
    id: 2,
    category: "product",
    productName: "How Innovation Works",
    productPrice: 16,
    description:
      "Matt Ridley argues in this book that we need to change the way we think about innovation, to see it as an incremental, bottom-up, fortuitous process that happens to society as a direct result of the human habit of exchange, rather than an orderly, top-down process developing according to a plan.",
    isOff: true,
    offPercentage: 10,
    productImage: require("../../../assets/images/HowInnovationWorks.jpeg"),
    productImageList: [
      require("../../../assets/images/TheSubtleArt.jpeg"),
      require("../../../assets/images/TheSubtleArt.jpeg"),
      require("../../../assets/images/TheSubtleArt.jpeg"),
    ],
  },
  {
    id: 3,
    category: "wishlist",
    productName: "Thinking Fast and Slow",
    productPrice: 10,
    description:
      "Thinking Fast And Slow shows you how two systems in your brain are constantly fighting over control of your behavior and actions, and teaches you the many ways in which this leads to errors in memory, judgment and decisions, and what you can do about it.",
    isOff: true,
    offPercentage: 5,
    productImage: require("../../../assets/images/Thinking.jpeg"),
    productImageList: [
      require("../../../assets/images/Thinking.jpeg"),
      require("../../../assets/images/Thinking.jpeg"),
      require("../../../assets/images/Thinking.jpeg"),
    ],
  },
  {
    id: 4,
    category: "wishlist",
    productName: "MilkAndHoney",
    productPrice: 12,
    description:
      "Milk and honey is a collection of prose and poetry that explores themes of silence, abuse, womanhood, family, connections and personal power",
    isOff: true,
    offPercentage: 15,
    productImage: require("../../../assets/images/MilkAndHoney.png"),
    productImageList: [
      require("../../../assets/images/MilkAndHoney.png"),
      require("../../../assets/images/MilkAndHoney.png"),
      require("../../../assets/images/MilkAndHoney.png"),
    ],
  },

  {
    id: 5,
    category: "promo",
    productName: "Reading Together",
    productPrice: 30,
    description:
      "Reading Together is the essential guide for parents interested in starting a book club with their kids and raising their children to become book-loving adults.",
    isOff: true,
    offPercentage: 15,
    productImage: require("../../../assets/images/raed.jpeg"),
    productImageList: [
      require("../../../assets/images/raed.jpeg"),
      require("../../../assets/images/raed.jpeg"),
      require("../../../assets/images/raed.jpeg"),
    ],
  },

  {
    id: 6,
    category: "promo",
    productName: "Sapiens: A brief history of Humankind",
    productPrice: 32,
    description:
      "In this bold and provocative book, Yuval Noah Harari explores who we are, how we got here and where we’re going.",
    isOff: true,
    offPercentage: 25,
    productImage: require("../../../assets/images/sapiens.jpeg"),
    productImageList: [
      require("../../../assets/images/sapiens.jpeg"),
      require("../../../assets/images/sapiens.jpeg"),
      require("../../../assets/images/sapiens.jpeg"),
    ],
  },
];
