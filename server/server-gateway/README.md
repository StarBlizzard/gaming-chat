# server-gateway

Server gateway is the solution I implemented as a **reverse proxy** to protect, process and manage data flow between the front end and the microservice environment.

## How it works

The **server-gateway** will receive two kind of connections: Websockets and HTTP requests.

### Forwarding HTTP requests
HTTP requests will be managed by GraphQL, depending on the GPQL operations, it will redistribuite the task into the rest of the microservices.

For example:
```graphql
query GetUserAndChat {
  users {
    id
    email
    name
  }
  chatHistory(roomId: "abc123") {
    id
    from {
      id
      name
    }
    content
    timestamp
  }
}
```
On this scenario `chatHistory` and `users` belong each to a different microservices: **Message** and **Users**, so the the **server-gateway** would use request using the operation name `users` and `chatHistory` to map them to their corresponding server using a map table.

### Realtime communication
TBD
