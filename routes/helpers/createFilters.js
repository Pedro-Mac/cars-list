const createFilters = array => {
  const brandList = [];
  for (const el of array) {
    if (!brandList.includes(el.BRAND)) brandList.push(el.BRAND);
  }

  return brandList;
};

module.exports = createFilters;
