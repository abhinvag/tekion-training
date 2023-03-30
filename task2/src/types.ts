export type User = {
    userID: string,
    userName: string,
    userImage: string
}

export type Users = {
    [key:string]: User
}

export type Comment = {
    commentID: string,
    userID: string,
    userComment: string,
    date: string,
    commentReplies: Comment[],
    votes: number
}

export type Post = {
    postID: string,
    userID: string,
    postImageURL: string,
    comments: Comment[],
    postText: string,
    postVotes: number
}
