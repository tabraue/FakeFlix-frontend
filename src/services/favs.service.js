import { api } from '.';

export const getAllFavs = async () => {
  try {
    const { data } = await api.get('/favs', {
      headers: {
        token: localStorage.getItem('token'),
      },
    });
    return data.usersFavs[0].filmsId;
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong');
  }
};
//console.log(data);
/*      {
message: 'Here you are all favs',
usersFavs: [
  {
    _id: '661e95d76fa39ad72f4f937f',
    userId: '661e7f187f716bd642db4cc3',
    __v: 0,
    filmsId: Array(12) [
      '693134', '693134', '693134', '693134', '693134', '693135', '693135', '693135',
      '693135', '693136', '693136', '693137'
    ]
  }
]
} */

export const addFav = async (filmId) => {
  try {
    const { data } = await api.post(
      `/favs/${filmId}`, {},
      {
        headers: {
          token: localStorage.getItem('token'),
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const deleteFav = async (filmId) => {
  try {
    const { data } = await api.delete(
      `/favs/${filmId}`,
      {
        headers: {
          token: localStorage.getItem('token'),
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong');
  }
};
