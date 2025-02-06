import type {PagedResponseInterface} from "~/interfaces/pagedResponseInterface";
import type {PostInterface} from "~/interfaces/postInterface";

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
            return await $fetch(`/api/posts/${id}/like`, {
                method: "POST",
                credentials: 'include',
            })
        } catch (e) {
            console.log(e)
        }
    }

    async function dislikePost(id: string) {
        try {
            return await $fetch(`/api/posts/${id}/like`, {
                method: "DELETE",
                credentials: 'include',
            })
        } catch (e) {
            console.log(e)
        }
    }
    return { getData, likePost, dislikePost };
}