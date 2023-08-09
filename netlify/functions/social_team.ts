import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  console.log(event);
  let {text} = JSON.parse(event.body);

  return {

    statusCode: 200,
    body: "<@U04L9MD7AMS> " + text
  };
};

export { handler };