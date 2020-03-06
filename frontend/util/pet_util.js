export const getPets = () => $.ajax({
    url: '/api/pets'
});

export const getPet = id => $.ajax({
    method: 'GET',
    url: `/api/pets/${id}`
});

export const addFavoriteToPet = id => $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: { id }
});

export const removeFavoriteFromPet = id => $.ajax({
    url: '/api/likes',
    method: 'DELETE',
    data: { id }
});