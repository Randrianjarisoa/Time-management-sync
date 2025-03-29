import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";


@WebSocketGateway()
export class TasksGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('taskAdded')
  handleTaskAdded(client: any, task: any) {
    this.server.emit('taskUpdate', task)
  }
}