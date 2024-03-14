

const settings = {

  prod: {
    SENDGRID_API_KEY:
      "SG.wrMQMkS9SSebhBxkKPYINw.D5oufra7BN_SU_S4VhIk8fKe7QM3k4fr1_dptrZyrBw",
    baseURL: "https://o1bqd984.api.sanity.io/v2021-06-07/data/query",
  },
};

const getCurrentSettings = () => {
  return settings.prod;
};
export default getCurrentSettings();
