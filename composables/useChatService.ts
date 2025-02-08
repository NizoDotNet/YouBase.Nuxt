import type {PagedResponseInterface} from "~/interfaces/pagedResponseInterface";
import type {ChatInterface} from "~/interfaces/chatInterface";

export const useChatService = () => {
    return {
        async getData(pageNumber: number, pageSize: number): Promise<PagedResponseInterface<ChatInterface>> {
            try {
                const data = await $fetch<PagedResponseInterface<ChatInterface>>(`/api/chats?page=${pageNumber}&pageSize=${pageSize}`, {
                    method: 'GET',
                    credentials: 'include',
                })
                if(data === null) {
                    return {
                        items: [],
                        page: pageNumber,
                        pageSize: pageSize,
                        totalCount: 0,
                        hasNextPage: false,
                        hasPrevPage: false
                    };
                }
                return data;
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