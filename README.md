# Photoverse

Student project by 3rd year [Media Engineering](https://heig-vd.ch/en/education/bachelors-degree-program/media-engineering) students at [HEIG-VD](https://heig-vd.ch/).

The Photobooth of the Future, a project for the [Swiss Camera Museum](https://www.cameramuseum.ch/en/) in Vevey.

## Getting Started

In order to run this project locally ensure that you have [OBS](https://obsproject.com/) and [OBS-Websocket]([obs-websocket - Remote-control OBS Studio from WebSockets | OBS Forums](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/)) installed. When you open OBS you should be prompted with the OBS-Websocket settings, configure as follows :

- Enable WebSockets server 

- Server Port : 4444

- Disable authentication (no password is needed)

- Disable IPv4 lock, system tray alerts & debug logging

Add your webcam or external camera as source and enable a chromakey filter on it, you can follow a video tutorial [here](https://www.youtube.com/watch?v=8faHiVALNqE). Now create a scene for each background you wish to use and name them "Scene 1" to "Scene 5" (If you need more or fewer scenes you might have to adapt the code.)

## Running the project

In order to run the project ensure that you have [Node]([Download | Node.js](https://nodejs.org/en/download/)) and [Git]([Git - Downloading Package](https://git-scm.com/download/win)).  To run the project locally you will need live-server, install it by running :

`npm install live-server -g` 

### Clone repo

`git clone https://github.com/watermelon-ltd/PB-Turfu.git`

### Install dependencies

`npm install`

### Running locally

Use `live-server /dist` in the root directory of the project to serve it.

## Other settings

It is heavily recommended to use this project in a chromium browser for performance and compatibility reasons. If you're using this as an installation we heavily recommend you set your homepage to `localhost:8080` while also using `--kiosk`& `--kiosk-printing`.

If you're using the print feature, ensure that it is properly setup and capable of printing 15x10cm photo format.

## Usage

Once running locally, you'll be prompted to share your screen. Select either the entirety of the screen (if using kiosk mode) or the current tab (if not fullscreen). 

You can change backgrounds by swiping the carousel and once you're ready launch the countdown by pressing the capture button! Make sure you use some of our awesome AR assets in the scene too.
