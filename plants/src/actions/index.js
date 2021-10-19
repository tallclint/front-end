import axiosWithAuth from "../util";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchStart = () => {
  return { type: FETCH_START };
};
export const fetchSuccess = (plantData) => {
  return { type: FETCH_SUCCESS, payload: plantData };
};
export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};

export const plantsStart = (plantData) => {
  return (dispatch) => {
    axiosWithAuth()
      .get("https://watergrows.herokuapp.com/api/plants")
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err.response.data.message));
      });
  };
};
export const addPlant = (newPlant) => {
  return (dispatch) => {
    dispatch(fetchStart);
    axiosWithAuth()
      .post("https://watergrows.herokuapp.com/api/plants", newPlant)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err.response.data.message));
      });
  };
};
export const deletePlant = (id) => {
  return (dispatch) => {
    dispatch(fetchStart);
    axiosWithAuth()
      .delete(`https://watergrows.herokuapp.com/api/plants/${id}`)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err.response.data.message));
      });
  };
};
export const updatePlant = (plant) => {
  return (dispatch) => {
    dispatch(fetchStart);
    axiosWithAuth()
      .put(`https://watergrows.herokuapp.com/api/plants/${plant.id}`, plant)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err.response.data.message));
      });
  };
};
