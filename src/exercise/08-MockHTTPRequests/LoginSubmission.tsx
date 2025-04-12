import * as React from "react";
import Login from "./../../sharedComponent/Login";
import Spinner from "./../../sharedComponent/spinner";
// import { fetch } from "whatwg-fetch";

interface LoginFormData {
  username: string;
  password: string;
}

interface FormSubmissionState {
  status: "idle" | "pending" | "resolved" | "rejected";
  responseData: {username: string} | null;
  errorMessage: string | null;
}

interface FormSubmissionAction {
  type: "START" | "RESOLVE" | "REJECT";
  responseData?: {username: string};
  error?: { message: string };
}

function formSubmissionReducer(state: FormSubmissionState, action: FormSubmissionAction) : FormSubmissionState {
  switch (action.type) {
    case "START": {
      return { 
        status: "pending", 
        responseData: null, 
        errorMessage: null 
      };
    }
    case "RESOLVE": {
      return {
        status: "resolved",
        responseData: action.responseData ?? null,
        errorMessage: null,
      };
    }
    case "REJECT": {
      return {
        status: "rejected",
        responseData: null,
        errorMessage: action.error?.message ?? "Unknown error",
      };
    }
    default:
      throw new Error(`Unsupported type: ${action.type}`);
  }
}

function useFormSubmission({ 
  endpoint, 
  data }
  : { 
    endpoint: string;
    data: LoginFormData | null; 
  }) {
  const [state, dispatch] = React.useReducer(formSubmissionReducer, {
    status: "idle",
    responseData: null,
    errorMessage: null,
  });

  const fetchBody = data ? JSON.stringify(data) : null;
  React.useEffect(() => {
    if (fetchBody) {
      dispatch({ type: "START" });

      fetch(endpoint, {
        method: "POST",
        body: fetchBody,
        headers: {
          "content-type": "application/json",
        },
      }).then(async (response) => {
        const data = await response.json();
        if (response.ok) {
          dispatch({ type: "RESOLVE", responseData: data });
        } else {
          dispatch({ type: "REJECT", error: data });
        }
      });
    }
  }, [fetchBody, endpoint]);

  return state;
}

const LoginSubmission = () => {
  const [formData, setFormData] = React.useState<LoginFormData | null>(null);
  const { status, responseData, errorMessage } = useFormSubmission({
    endpoint: "https://auth-provider.example.com/api/login",
    data: formData,
  });
  return (
    <>
      {status === "resolved" ? (
        <div>
          Welcome <strong>{responseData?.username}</strong>
        </div>
      ) : (
        <Login onSubmit={(data) => setFormData(data)} />
      )}
      <div style={{ height: 200 }}>
        {status === "pending" ? <Spinner /> : null}
        {status === "rejected" ? (
          <div role="alert" style={{ color: "red" }}>
            {errorMessage}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default LoginSubmission;
