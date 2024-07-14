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
import {getTrips} from "./routes/get-trips";
import {getParticipants} from "./routes/get-participants";
import {createInvite} from "./routes/create-invite";
import {updateTrip} from "./routes/update-trip";
import {getTripDetails} from "./routes/get-trip-details";
import {getParticipantDetails} from "./routes/get-participant-details";
import {errorHandler} from "./error-handler";
import {env} from "./env";

const app = fastify()

app.register(cors, {
	origin: '*',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler)

app.register(createTrip)
app.register(updateTrip)
app.register(confirmTrip)
app.register(getTrips)
app.register(getTripDetails)
app.register(confirmParticipant)
app.register(getParticipantDetails)
app.register(createInvite)
app.register(getParticipants)
app.register(createActivity)
app.register(getActivity)
app.register(createLink)
app.register(getLinks)

app.listen({port: env.PORT}).then(() => {
	console.log('Server running!');
})
