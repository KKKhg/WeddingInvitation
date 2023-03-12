import { APIPATH, BASEURL } from "./constants"

export const visitorCheck = () => {
    fetch(BASEURL + APIPATH.WEDDING + 'visitorCheck', 
    {
        method: 'post',
    });
}

export const getComments = async (page) => {
    const res = await fetch(BASEURL + APIPATH.WEDDING + `comment/${page}`, 
    {
        method: 'get',
    });
    return await res.json();
}


export const insertComment = async (author, password, comment) => {
    let data = {
        author,
        password,
        comment,
    }
    try{
        const res = await fetch(BASEURL + APIPATH.WEDDING + 'insertComment', 
            {
                method: 'post',
                body: JSON.stringify(data),
            }
        );
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}