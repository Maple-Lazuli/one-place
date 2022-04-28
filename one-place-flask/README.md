# Installation

## Existing Image

To pull and run the existing image on Dockerhub, execute the following in a terminal
```shell
sudo docker run -d -v "<place to store backups>":"/opt/app/data/backups" -p 3001:3001  --hostname lovelylazuli/one-place-flask
```

## Rebuild

If there are issues with Dockerhub or the images are out of date. Rebuild the image with the following:
```shell
sudo docker build . -f Dockerfile -t lovelylazuli/one-place-flask
```
