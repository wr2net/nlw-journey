import {FastifyInstance} from "fastify";
import {ZodTypeProvider} from "fastify-type-provider-zod";
import { z } from "zod";
import {prisma} from "../lib/prisma";
import {ClientError} from "../errors/client-error";

export async function getParticipantDetails(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().get('/participant/:participantId', {
		schema: {
			params: z.object({
				participantId: z.string().uuid(),
			}),
		}
	}, async (request) => {
		const { participantId } = request.params;

		const participant = await prisma.participant.findUnique({
			where: {
				id: participantId,
			},
		})

		if (!participant) {
			throw new ClientError('Participant not found.')
		}

		return { participant }
	})
}
