import type {PagedResponseInterface} from "~/interfaces/pagedResponseInterface";
import type {PostInterface} from "~/interfaces/postInterface";
import type {CommentInterface} from "~/interfaces/commentInterface";

export const usePostService = () => {
    async function getData(pageNumber: number, pageSize: number) : Promise<PagedResponseInterface<PostInterface>> {
        try {
            return  await $fetch(`/api/posts?page=${pageNumber}&pageSize=${pageSize}`, {
                method: "GET"
            })
        } catch (e) {
            console.log(e)
        }
        return {
            items: [],
            page: pageNumber,
            pageSize: pageSize,
            totalCount: 0,
            hasNextPage: false,
            hasPrevPage: false
        };
    }
    async function likePost(id: string) {
        try {
            await $fetch(`/api/posts/${id}/like`, {
                method: "POST",
                credentials: 'include',
            })
            return true;
        } catch (e) {
            console.log("Error in like")
            return false;
        }
    }

    async function dislikePost(id: string) : Promise<boolean> {
        try {
            await $fetch(`/api/posts/${id}/like`, {
                method: "DELETE",
                credentials: 'include',
            })
            return true;
        } catch (e) {
            console.log("Error")
            return false;
        }
    }

    async function getComments(id: string, pageNumber: number, pageSize: number) : Promise<PagedResponseInterface<CommentInterface>> {
        return await $fetch(`/api/posts/${id}/comments?page=${pageNumber}&pageSize=${pageSize}`, {
            method: "GET",
            credentials: 'include',
        })
    }
    return { getData, likePost, dislikePost,getComments };
}