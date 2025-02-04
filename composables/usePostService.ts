import type {PagedResponseInterface} from "~/interfaces/pagedResponseInterface";

export const usePostService = () => {
    return {
        async getData(pageNumber: number, pageSize: number) : Promise<PagedResponseInterface<any>> {
            try {
                return  await $fetch(`https://localhost:7289/api/posts?page=${pageNumber}&pageSize=${pageSize}`, {
                    method: "GET"
                })
            } catch (e) {
                console.log(e)
            }
        }
    }
}