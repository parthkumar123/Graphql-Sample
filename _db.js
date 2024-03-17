let games = [
    { id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch'] },
    { id: '2', title: 'Zelda2, Tears of the Kingdom2', platform: ['Switch2'] },
    { id: '3', title: 'Zelda3, Tears of the Kingdom3', platform: ['Switch3'] },
    { id: '4', title: 'Zelda4, Tears of the Kingdom4', platform: ['Switch4'] },
    { id: '5', title: 'Zelda5, Tears of the Kingdom5', platform: ['Switch5'] },
]

let authors = [
    { id: '1', name: 'mario', verified: true },
    { id: '2', name: 'mario2', verified: false },
    { id: '3', name: 'mario3', verified: true },
]

let reviews = [
    { id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id: '2' },
    { id: '2', rating: 2, content: 'lorem ipsum2', author_id: '2', game_id: '2' },
    { id: '3', rating: 3, content: 'lorem ipsum3', author_id: '3', game_id: '3' },
    { id: '4', rating: 4, content: 'lorem ipsum4', author_id: '1', game_id: '4' },
    { id: '5', rating: 5, content: 'lorem ipsum5', author_id: '2', game_id: '5' },
    { id: '6', rating: 6, content: 'lorem ipsum6', author_id: '3', game_id: '1' },
    { id: '7', rating: 7, content: 'lorem ipsum7', author_id: '2', game_id: '4' },
]

export default { games, authors, reviews }