# Telling to use Docker's golang ready image
FROM golang

EXPOSE 8080 80 443

# Set pwd to the go folder
RUN mkdir -p $GOPATH/src/hash-service
WORKDIR $GOPATH/src/hash-service

ADD . $GOPATH/src/hash-service

RUN go get -u github.com/lunny/tango \
    && go get -u github.com/jimmykuu/webhelpers \
    && go get -u github.com/Youngyezi/geetest  \
    && go get -u github.com/asaskevich/govalidator \
    && go get -u github.com/dgrijalva/jwt-go \
    && go get github.com/pborman/uuid \
    && go get gopkg.in/mgo.v2 \
    && go get github.com/tango-contrib/binding \
    && go get github.com/tango-contrib/events \
    && go get github.com/tango-contrib/renders
    

RUN echo $GOPATH \
    &&  ls -all \
    &&  go build . \
    &&  ls -all 

ENTRYPOINT ["./hash-service"]
