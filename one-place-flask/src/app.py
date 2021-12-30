from flask import Flask, request, Response
from flask_cors import CORS
import time
import json
import hashlib

import constants as cnst

app = Flask(__name__)
CORS(app)

message = ""
last_update = 0

content_dict = {}


@app.route("/markdown", methods=["GET"])
def get_markdown():
    return Response(json.dumps("return_json"), status=200, mimetype='application/json')


@app.route("/projects", methods=["GET"])
def get_projects():
    return_json = {"projects": [content_dict.get(key) for key in content_dict.keys()]}
    return Response(json.dumps(return_json), status=200, mimetype='application/json')


@app.route("/projects", methods=["POST"])
def create_project():
    global content_dict
    template = cnst.project_dict.copy()
    template['title'] = request.json['data']['projectName']
    template['purpose'] = request.json['data']['projectPurpose']
    template['category'] = request.json['data']['projectCategory']
    template['creation_date'] = request.json['data']['projectCreationTime']
    prehash = template['title'] + str(template['creation_date'])
    template['id'] = hashlib.sha256(bytes(prehash, 'utf-8')).hexdigest()
    content_dict.update({template['id']: template})
    print(f'Recieved New Project {template["title"]}')
    return Response("Okay", status=200, mimetype='application/json')

@app.route("/delete", methods=["GET"])
def delete_project():
    global content_dict
    id_to_remove = request.args.get('id')
    content_dict.pop(id_to_remove)

    return Response(id_to_remove, status=200, mimetype='application/json')


@app.route("/updates", methods=["GET"])
def send_current():
    global last_update
    global message
    return_json = {
        "content": message,
        'updateTime': last_update
    }
    return Response(json.dumps(return_json), status=200, mimetype='application/json')


@app.route("/updates", methods=["POST"])
def update_current():
    global last_update
    global message
    div_content = request.json['data']['divContent']
    update_time = request.json['data']['time']
    if int(update_time) > int(last_update):
        last_update = update_time
        message = div_content
        print(f'Message update {message} at {last_update}')
    return Response("Ok", status=200, mimetype='application/json')


def main():
    app.run(host='0.0.0.0', port=3001)


if __name__ == "__main__":
    main()
