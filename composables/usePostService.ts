import type {PagedResponseInterface} from "~/interfaces/pagedResponseInterface";
import type {PostInterface} from "~/interfaces/postInterface";

export const usePostService = () => {
    return {
        async getData(pageNumber: number, pageSize: number) : Promise<PagedResponseInterface<PostInterface>> {
            try {
                return  await $fetch(`https://localhost:7289/api/posts?page=${pageNumber}&pageSize=${pageSize}`, {
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
    }
}