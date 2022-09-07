import { useReducer, useCallback } from "react";

export enum httpRequestStatusEnum {
  pending = "pending",
  completed = "completed",
}

enum ActionTypes {
  send = "SEND",
  success = "SUCCESS",
  error = "ERROR",
}

interface ActionInterface {
  type: ActionTypes;
  responseData?: object;
  errorMessage?: string;
}

interface StateType {
  status: httpRequestStatusEnum | null;
  data: any;
  error: any;
}

function httpReducer(state: any, action: ActionInterface) {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }

  return state;
}

const initialState: StateType = {
  status: null,
  data: null,
  error: null,
};

// basic custom hook that takes care about async req to the server (worked together with api.ts)

function useHttp(
  requestFunction: (requestData?: any) => void,
  startWithPending = false
) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    ...initialState,
    status: startWithPending ? httpRequestStatusEnum.pending : null,
  });
  // useClallback gives us confident knowledge that this certain function will not be re-rendered any time when this hook is called
  const sendRequest = useCallback(
    async function (requestData: object) {
      dispatch({ type: ActionTypes.send });
      try {
        const responseData: any = await requestFunction(requestData);
        dispatch({ type: ActionTypes.success, responseData });
      } catch (error: any) {
        dispatch({
          type: ActionTypes.error,
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
