from simple_websocket_server import WebSocketServer, WebSocket


class ChatServer(WebSocket):
    def handle(self):
        # what will happen when the server receive a message
        # echo message back to client
        self.send_message(self.data)

    def connected(self):
        # what will I do when the client connects to me
        print(self.address, 'connected')

    def handle_close(self):
        # what will I do when the client close the connection
        print(self.address, 'closed')


if __name__ == '__main__':
    server = WebSocketServer('', 8000, ChatServer)
    print(server)
    server.serve_forever()