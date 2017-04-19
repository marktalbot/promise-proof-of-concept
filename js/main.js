// axios.get('/data.json')
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error)
// );

// axios.get('/data2.json')
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error)
// );

var gameEngine = axios.get('/data.json');
var gameServer = axios.get('/data2.json');
var bad        = axios.get('/data3.json');

// Option #1
// ----------------------------------------------------------- //
Promise.all([gameEngine, gameServer, bad])
    .then(values => {
        [one, two] = values;
        console.log(one.data, two.data);
    })
    .catch(error => {
        console.log('STOP EVERYTHING!', error);
    }
);

// Option #2
// ----------------------------------------------------------- //
gameEngine
    .then(response => {
        console.log('data', response.data);
        gameServer.then(response => {
            console.log('nested data', response.data);
        })
        .catch(e => {
            console.log('SHOW DISCONNECTED ERROR (game server error)');    
        });
    })
    .catch(error => {
        console.log('SHOW BAD TACTIC MODAL (game engine error)');
    }
);
