const transformNumericsToMongoQueryFormat = (
  defaultLessThan,
  defaultGreaterThan,
  inputNumericQuery
) => {
  const { lte = defaultLessThan, gte = defaultGreaterThan } = inputNumericQuery;

  const convertedQuery = { $lte: lte, $gte: gte };

  return convertedQuery;
};

module.exports = transformNumericsToMongoQueryFormat;
