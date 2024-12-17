const responseHandler = async (res, status, data, error) => {
  try {
    return res.status(status).send({
      status,
      data,
      error,
    });
  } catch (error) {
    throw error;
  }
};

export default responseHandler;
