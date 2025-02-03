const defaultState = {
    authors:[
        {
          id: 1,
          author_name: "Alexander Duma",
          famous_book: "three musketeers",
          author_photo:
            "https://images.pexels.com/photos/9268697/pexels-photo-9268697.jpeg",
        },
      ]
}

export const AuthorReducer = (state=defaultState,action) => {
    switch(action.type){
        case "SET_AUTHOR":
            return {...state,authors:action.payload}
        case "DELETE_AUTHOR":
            return {...state, authors:state.authors.filter(author => {
                if(author.id != action.payload){
                    return author;
                }
            })}
        default:return state;
    }
}


export const setAuthors = (authors) => {
    return {type:"SET_AUTHOR",authors}
}
export const DeleteAuthor = (id) => {
    return {type:"DELETE_AUTHOR",id}
}