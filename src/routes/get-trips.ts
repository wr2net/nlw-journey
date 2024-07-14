import {FastifyInstance} from "fastify";
import {ZodTypeProvider} from "fastify-type-provider-zod";
import {prisma} from "../lib/prisma";

export async function getTrips(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().get('/trips', async (request) => {

		const trips = await prisma.trip.findMany({
			include: {
				participants: true,
				activies: true,
				links: true,
			}
		})

		return { trips }
	})
}
