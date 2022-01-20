import * as constants from "../constants/constants";
import Answer from "../pages/Answer";
import Start from "../pages/Start";

const routes = [
    {
        path: constants.PAGE_START,
        exact: true,
        element: <Start />,
    },
    {
        path: constants.PAGE_ANSWER,
        exact: true,
        element: <Answer />
    },
];

export default routes;