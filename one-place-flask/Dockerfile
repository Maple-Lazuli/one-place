FROM ubuntu

COPY src /opt/app/src

COPY data /opt/app/data

COPY *.txt /opt/app

RUN apt update

RUN apt upgrade -y

RUN apt install python3 -y

RUN apt install python3-pip -y

RUN apt install python3.10-venv -y

RUN pip install -r opt/app/requirements.txt

WORKDIR /opt/app/src

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=3001"]
