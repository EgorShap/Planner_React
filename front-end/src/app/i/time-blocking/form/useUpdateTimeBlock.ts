import { timeBlockService } from '@/services/time-block.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeTimeBlockFormState } from '@/types/time-block.types'

export function useUpdateTimeBlock(key?: string) {
	const queryClinet = useQueryClient()

	const { mutate: updateTimeBlock } = useMutation({
		mutationKey: ['update time-block'],
		mutationFn: ({ id, data }: { id: string; data: TypeTimeBlockFormState }) =>
			timeBlockService.updateTimeBlock(id, data),
		onSuccess() {
			queryClinet.invalidateQueries({
				queryKey: ['time-blocks']
			})
		}
	})

	return { updateTimeBlock }
}
