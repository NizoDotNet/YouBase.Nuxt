import type {UserInterface} from "~/interfaces/userInterface";

export interface CommentInterface {
    id: string | undefined;
    text: string;
    user: UserInterface;
}