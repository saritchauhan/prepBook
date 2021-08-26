export const rootBase = 'http://localhost:5000'

const userResource = 'user';
const postResource = "posts"


export const signInPath = `${rootBase}/${userResource}/register/`;
export const getUserPath = `${rootBase}/${userResource}`;


export const addPostPath = `${rootBase}/${postResource}/add/`;
export const getUserPostsPath = `${rootBase}/${postResource}`;
export const getAllPostsPath = `${rootBase}/${postResource}/`;
export const searchPostsPath = `${rootBase}/${postResource}`;

