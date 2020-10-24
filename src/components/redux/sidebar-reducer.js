
let initialState = {
    sidebar: [
        {
            name: 'Victor',
            id: 1,
            img: "https://static.360tv.ru/media/article_media/7e00c45cfdb9489cad203327cb94bb0d_201708211251.jpg"
        },
        {
            name: 'Dima',
            id: 2,
            img: "https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg"
        },
        {
            name: 'Victoria',
            id: 3,
            img: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"
        }
    ]
};

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;