from simple_websocket_server import WebSocketServer, WebSocket

import json


class ChatServer(WebSocket):
    clients = []

    @classmethod
    def send_to_all_clients(cls, msg: dict, sender=None):
        msg = json.dumps(msg)
        for client in cls.clients:
            if client != sender:
                client.send_message(msg)

    def handle(self):
        # what will happen when the server receive a message
        # echo message back to client
        # self.send_message(self.data)
        print(f'Data received: {self.data}')
        msg_to_send = {}
        msg_content = ChatServer.load_from_json(self.data)
        print(msg_content, type(msg_content))
        if msg_content['type'] == 'login':
            self.username = msg_content['username']
            print(self.username)
            msg_to_send['body'] = f"{self.username} has been connected"
            msg_to_send['type'] = "login"
        elif msg_content['type'] == 'chat':
            msg_to_send['body'] = msg_content['body']
            msg_to_send['type'] = "chat"

        ChatServer.send_to_all_clients(msg_to_send, self )

    def connected(self):
        # what will I do when the client connects to me
        print(self.address, 'connected')
        ChatServer.clients.append(self)
        print(ChatServer.clients)

    def handle_close(self):
        # what will I do when the client close the connection
        print(self.address, 'closed')
        ChatServer.clients.remove(self)
        # send message to all users that user has left
        msg_to_send = {}
        msg_to_send['type'] = 'logout'
        msg_to_send['body'] = f"{self.username} has been disconnected"
        ChatServer.send_to_all_clients(msg_to_send)

    @staticmethod
    def load_from_json(anystring: str):
        try:
            return json.loads(anystring)
        except Exception as e:
            return {}


if __name__ == '__main__':
    server = WebSocketServer('', 8000, ChatServer)
    print(server.__dict__)
    server.serve_forever()
