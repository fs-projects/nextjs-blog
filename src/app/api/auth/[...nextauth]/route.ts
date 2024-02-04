// A route.ts inside api folder can be used to define api request handler files. Basically you can use it call
// external api, database etc. It is not required with Nextjs 14 as we have server actions that we can use
// directly in our components to make the api call. Here we are using it so that github server which is outside
// to our application can access our application and use these methods.

export { GET, POST } from "@/auth";
