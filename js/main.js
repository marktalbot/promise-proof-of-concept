// axios.get('/data.json')
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error)
// );

// axios.get('/data2.json')
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error)
// );

let gameEngine   = axios.get('/data.json');
let gameServer   = axios.get('/data2.json');
// let bad          = axios.get('/data3.json');
let gameServerFn = (url) => {
    return axios.get(url);
};

// Option #1
// ----------------------------------------------------------- //
// Promise.all([gameEngine, gameServer, bad])
//     .then(values => {
//         [one, two] = values;
//         console.log(one.data, two.data);
//     })
//     .catch(error => {
//         console.log('STOP EVERYTHING!', error);
//     }
// );

// Option #2
// ----------------------------------------------------------- //
// gameEngine
//     .then(response => {
//         console.log('data', response.data);
//         gameServer.then(response => {
//             console.log('nested data', response.data);
//         })
//         .catch(error => {
//             console.log('SHOW DISCONNECTED ERROR (game server error)');    
//         });
//     })
//     .catch(error => {
//         console.log('SHOW BAD TACTIC MODAL (game engine error)');
//     }
// );

// Option #3
// ----------------------------------------------------------- //
gameEngine
    .then(response => {
        return Promise.all([response, gameServerFn(response.data.url)]);
    })
    .then(results => {
        [one, two] = results;
        console.log(one.data, two.data);
    })
    .catch(error => {
        console.log('SHOW CORRECT ERROR MODAL'); // Check error object and serve correct modal based on 'reason' property
    }
);