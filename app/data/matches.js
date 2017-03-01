// ===============================================================================
// DATA
// Below data will hold all of the possible matches.
// ===============================================================================

// create an array of possible compatible matches, each potential match is an object, inside each object will have three attributes [name, photo and score]

var matches = [
    {
        "name":"Daryl Dixon",
        "photo":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5ODE4NTgzMl5BMl5BanBnXkFtZTcwODI0MjAwMw@@._V1_.jpg",
        "scores":[
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        "name":"Maggie Green",
        "photo":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MDg0MzgxOF5BMl5BanBnXkFtZTgwMzM5NDg1MzE@._V1_.jpg",
        "scores":[
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    },
    {
        "name":"Sasha Williams",
        "photo":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_.jpg",
        "scores":[
            "5",
            "2",
            "2",
            "2",
            "4",
            "1",
            "3",
            "2",
            "5",
            "5"
        ]
    },
    {
        "name":"Rick Grimes",
        "photo":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjI2NDYyNjg4NF5BMl5BanBnXkFtZTcwMjI5OTMwNA@@._V1_.jpg",
        "scores":[
            "3",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
        ]
    },
    {
        "name":"Rosita Espinoza",
        "photo":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyMTQ5Njk3M15BMl5BanBnXkFtZTgwODg1MTIzNTE@._V1_SY1000_CR0,0,777,1000_AL_.jpg",
        "scores":[
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
        ]
    },
    {
        "name":"Morgan Jones",
        "photo":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0MzQ1MDEyMF5BMl5BanBnXkFtZTcwNjcwMDIyOQ@@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
        "scores":[
            "4",
            "4",
            "2",
            "3",
            "2",
            "2",
            "3",
            "2",
            "4",
            "5"
        ]
    }

];

// export the array so it is accessible to other files using require.
module.exports = matches;