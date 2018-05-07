module.exports.makeResponse = (body, status = 200) => {
  return {
    body: JSON.stringify(body),
    statusCode: status,
  };
};