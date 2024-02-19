import { timeBlockService } from '@/services/time-block.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeTimeBlockFormState } from '@/types/time-block.types'

export function useCreateTimeBlock() {
	const queryClinet = useQueryClient()

	const { mutate: createTimeBlock, isPending } = useMutation({
		mutationKey: ['create time-block'],
		mutationFn: (data: TypeTimeBlockFormState) =>
			timeBlockService.createTimeBlock(data),
		onSuccess() {
			queryClinet.invalidateQueries({
				queryKey: ['time-blocks']
			})
		}
	})

	return { createTimeBlock, isPending }
}
