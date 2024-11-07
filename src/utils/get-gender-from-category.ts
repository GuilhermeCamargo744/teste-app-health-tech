export const getGenderFromCategory = (category: string) => {
  if (category.includes("womens")) {
    return "women";
  } else if (category.includes("women")) {
    return "women";
  } else if (category.includes("mens")) {
    return "men";
  } else if (category.includes("men")) {
    return "men";
  } else {
    return "unknown";
  }
};
