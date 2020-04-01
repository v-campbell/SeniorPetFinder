// export const fetchAllFavoritedPets = () => (
//     $.ajax({
//         url: '/api/favorites',
//         method: 'GET'
//     })
// )

// export const receiveFavorite = (id) => (
//     $.ajax({
//         url: `/api/favorites/${id}`,
//         method: 'GET'
//     })
// )

// export const addFavoriteToPet = (id) => (
//     $.ajax({
//         url: '/api/favorites',
//         method: 'POST',
//         data: { id }
//     })
// )

// export const removeFavoriteFromPet = (id) => (
//     $.ajax({
//         url: `/api/favorites/${id}`,
//         method: 'DELETE',
//         data: { id }
//     })
// )

export const fetchFavorites = userId => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/favorites`,
  });
};

export const createFavorite = (formData, userId) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${userId}/favorites`,
    data: { favorite: formData }
  });
};

export const deleteFavorite = (userId, favoriteId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${userId}/favorites/${favoriteId}`
  });
};
