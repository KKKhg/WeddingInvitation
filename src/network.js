import { APIPATH, BASEURL } from "./constants"

export const visitorCheck = () => {
    fetch(BASEURL + APIPATH.WEDDING + 'visitorCheck', 
    {
        method: 'post',
    });
}