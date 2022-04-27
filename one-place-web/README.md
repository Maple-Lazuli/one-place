# Installation

## Existing Image

To pull and run the existing image on Dockerhub, execute the following in a termnial

```shell
sudo docker run -d -p 3000:3000 lovelylazuli/one-place-web
```

## Rebuild

If there are issues with Dockerhub or the images are out of date. Rebuild the image with the following:
```shell
sudo docker build . -f Dockerfile -t lovelylazuli/one-place-web
```
