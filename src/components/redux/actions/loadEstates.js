export const loadEstates = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://mongo-real-estate.herokuapp.com/api/v1/acamica/estate"
    );
    const responseJson = await response.json();
    dispatch({ type: "LOAD_ESTATES", payload: responseJson });
  };
};
