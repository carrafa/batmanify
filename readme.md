# BATMANIFY

a tiny jQuery plugin to create sweet batman transitions on your links.

<img src="screenshot.gif" width="100%">

## configuration

__rotationSpeed__:  in degrees per 10 milliseconds.  default is 15.

__zoomSpeed__: in a percentage increase/decrease per 10 milliseconds.  default is 0.02

__imageSource__: a url.  default is batman's.  use your own???

__topOffset__: sets the top position of the image, may have to adjust based on your custom image or implementation

#### usage
```
$('.my-sweet-link').batmanify({
    rotationSpeed: 15,                            // optional
    zoomSpeed: 0.02,                              // optional
    imageSource: 'images/batmanify.png',          // optional
    topOffset: 0                                  // optional
  });

```


or, just add class "batmanify" to your link
