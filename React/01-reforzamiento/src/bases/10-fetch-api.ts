import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'LYpwA75g6zO4C613rGi6Awz73MkBXu0Q';

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
);

// myRequest.then( (response) =>
//     response.json().then( (data) => {
//         const imageUrl = data.data.images.original.url;
//         console.log(imageUrl);

//         const imgElement = document.createElement('img');
//         imgElement.src = imageUrl;

//         document.body.append(imgElement);
//     })
// ).catch((err) => {
//     console.log(err);
// });

const createImageInsideDOM = ( url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
};

myRequest.then( (response) =>
    response.json().then( ({ data }: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl);
    })
).catch((err) => {
    console.log(err);
});