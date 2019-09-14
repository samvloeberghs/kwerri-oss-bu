# Workbox Demo Scenarios

The scenarios below describes the various to demonstrate some of the functionality
that workbox has to offer.

1. Enabling offline Google Analytics
1. Showing a default image
1. Detecting Lie-fi ( or unreliable Wi-Fi )
1. Intercepting and modifying requests
1. Updating the application in the background and showing "New version available"

These are just a few of the possible scenarios made possible by service workers and workbox.

## Enabling offline Google Analytics

## Showing a default image if others unavailable

1. Show that we can load the country flags BE, NL if we are connected
1. Show that we load a default flag if we are not connected and we request LU flag
1. We reconnect and load DE and LU flag again and it works

## Detecting Lie-fi ( or unreliable Wi-Fi )

This one is related to showing a default image, but also acts on limited 
connectivity with extra configuration.

1. Connect to an unreliable Wi-Fi connection, for example:
    1. a connection with a high latency or unstable connectivity
    1. a good wifi connection but without internet
1. Start loading a resource or navigate
1. Show that after a given / configured period of time we consider offline mode.

## Intercepting and modifying requests

## Updating the application in the background and showing "New version available"
