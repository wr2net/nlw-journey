import {FastifyInstance} from "fastify";
import {ZodTypeProvider} from "fastify-type-provider-zod";
import { z } from "zod";
import {prisma} from "../lib/prisma";
import {ClientError} from "../errors/client-error";

export async function getParticipants(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().get('/participants/:tripId', {
		schema: {
			params: z.object({
				tripId: z.string().uuid(),
			}),
		}
	}, async (request) => {
		const { tripId } = request.params;

		const trip = await prisma.trip.findUnique({
			where: {
				id: tripId,
			},
			include: {
				participants: true,
			}
		})

		if (!trip) {
			throw new ClientError('Trip not found.')
		}

		return { links: trip.participants }
	})
}