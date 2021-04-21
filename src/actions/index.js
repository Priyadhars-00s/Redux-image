import axios from "axios";

//define our action cases with variables for ease of debugging
export const START = "START";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const getQuestions = () => dispatch => {
  //at the start of our function we will dispatch the loading action
  dispatch({ type: START });

  axios
    .get("https://api.thecatapi.com/v1/images/search")
    .then(res => {
      //if request is successful, dispatch success with our results
      //will be a different payload dependant on the api
      //console log the res first
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      //if the request throws an error, dispatch the failure action
      dispatch({ type: FAILURE, payload: err });
    });
};
