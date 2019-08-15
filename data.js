const data = {
    channels: [{
        idChannel: 1,
        name: 'Rodrigo Branas'
    }, {
        idChannel: 2,
        name: 'Porta dos fundos'
    }],
    playlists: [
        {
            idChannel: 1,
            idPlaylist: 1,
            name: 'AngularJS'
        },
        {
            idChannel: 1,
            idPlaylist: 2,
            name: 'NodeJS'
        },
    ],
    videos: [
        {
            idPlaylist: 1,
            idVideo: 1,
            title: 'Introdução ao AngularJS'
        }
    ]
}

exports.getData = function (collection, field, value) {
    return data[collection].filter(element => element[field] === value)
}