from flask import Flask, request, Response
from flask_cors import CORS
import time
import json

app = Flask(__name__)
CORS(app)

message = ""
time = 0


@app.route("/", methods=["GET"])
def root():
    print("Recieved Message")

    return_json = {
        "Test": "msg",
        'Test2': 'msg'
    }
    return Response(json.dumps(return_json), status=200, mimetype='application/json')


@app.route("/updates", methods=["POST"])
def update_current():
    global time
    global message
    divContent = request.json['data']['divContent']
    updateTime = request.json['data']['time']
    if int(updateTime) > int(time):
        time = updateTime
        message = divContent
        print(f'Message update {message} at {time}')
    return Response("Ok", status=200, mimetype='application/json')


@app.route("/updates", methods=["GET"])
def send_current():
    global time
    global message
    return_json = {
        "content": message,
        'updateTime': time
    }
    return Response(json.dumps(return_json), status=200, mimetype='application/json')


def main():
    app.run(host='0.0.0.0', port=3001)


if __name__ == "__main__":
    main()
