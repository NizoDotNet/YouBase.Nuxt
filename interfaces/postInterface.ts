import type {UserInterface} from "~/interfaces/userInterface";
import type {CommentInterface} from "~/interfaces/commentInterface";

export interface PostInterface {
    id: string | any,
    title: string,
    description: string,
    postDate: Date,
    imageUrl: string,
    comments: CommentInterface[],
    usersWhoLiked: UserInterface[]
}