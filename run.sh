#!/bin/bash

mvn spring-boot:run &
P1=$!
cd frontend && npm run start &
P2=$!
wait $P1 $P2

