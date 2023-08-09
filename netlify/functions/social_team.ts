import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  console.log(event)
  return {
    statusCode: 200,
    body: "<@U04L9MD7AMS> Hello World" + event
  };
};

export { handler };