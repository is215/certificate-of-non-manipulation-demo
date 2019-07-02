#!/bin/bash

SONAR_ORGANISATION="tradetrust"
SONAR_PROJECT_KEY="TradeTrust_document-renderer" 

if ! [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
    sonar-scanner \
        -Dsonar.scanner.skip=false \
        -Dsonar.projectKey=${SONAR_PROJECT_KEY} \
        -Dsonar.organization=${SONAR_ORGANISATION} \
        -Dsonar.sources=. \
        -Dsonar.host.url=https://sonarcloud.io \
        -Dsonar.login=${SONAR_LOGIN} \
        -Dsonar.pullrequest.key=${TRAVIS_PULL_REQUEST} \
        -Dsonar.pullrequest.branch=${TRAVIS_PULL_REQUEST_BRANCH}
elif [ "${TRAVIS_BRANCH}" = "master" ]; then
    sonar-scanner \
        -Dsonar.scanner.skip=false \
        -Dsonar.projectKey=${SONAR_PROJECT_KEY} \
        -Dsonar.organization=${SONAR_ORGANISATION} \
        -Dsonar.sources=. \
        -Dsonar.host.url=https://sonarcloud.io \
        -Dsonar.login=${SONAR_LOGIN}
fi;