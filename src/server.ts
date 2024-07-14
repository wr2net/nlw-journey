import fastify from "fastify";
import cors from '@fastify/cors';
import {createTrip} from "./routes/create-trip";
import {confirmTrip} from "./routes/confirm-trip";
import {serializerCompiler, validatorCompiler} from "fastify-type-provider-zod";
import {confirmParticipant} from "./routes/confirm-participant";
import {createActivity} from "./routes/create-activity";
import {getActivity} from "./routes/get-activitis";
import {createLink} from "./routes/create-link";
import {getLinks} from "./routes/get-links";

const app = fastify()

app.register(cors, {
	origin: '*',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipant)
app.register(createActivity)
app.register(getActivity)
app.register(createLink)
app.register(getLinks)

app.listen({port: 3333}).then(() => {
	console.log('Server running!');
})
