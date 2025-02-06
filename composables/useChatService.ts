import type {PagedResponseInterface} from "~/interfaces/pagedResponseInterface";
import type {ChatInterface} from "~/interfaces/chatInterface";

export const useChatService = () => {
    return {
        async getData(pageNumber: number, pageSize: number): Promise<PagedResponseInterface<ChatInterface>> {
            return await $fetch<PagedResponseInterface<ChatInterface>>(`/api/chats?page=${pageNumber}&pageSize=${pageSize}`, {
                method: 'GET',
            })
        }
    }
}