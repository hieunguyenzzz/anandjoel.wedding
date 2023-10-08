"use client"

import { useEffect } from "react";

const AnimatedImage = ({ containerId, innerId }: { containerId: string, innerId: string }) => {
  useEffect(() => {
    (function () {
      // Init
      var container = document.getElementById(containerId),
        inner = document.getElementById(innerId) as HTMLElement;
      console.log({ container, inner })
      if (!container) {
        return
      }
      if (!inner) {
        return
      }
      container.style.perspective = '100px'
      // Mouse
      var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function (event: MouseEvent) {
          var e = event || window.event;
          mouse.x = e.clientX - mouse._x;
          mouse.y = (e.clientY - mouse._y) * -1;
        },
        setOrigin: function (e: HTMLElement) {
          mouse._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
          mouse._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function () {
          return "(" + mouse.x + ", " + mouse.y + ")";
        }
      };

      // Track the mouse position relative to the center of the container.
      mouse.setOrigin(container);

      //-----------------------------------------

      var counter = 0;
      var updateRate = 10;
      var isTimeToUpdate = function () {
        return counter++ % updateRate === 0;
      };

      //-----------------------------------------

      var onMouseEnterHandler = function (event: MouseEvent) {
        update(event);
      };

      var onMouseLeaveHandler = function () {
        inner.style = "";
      };

      var onMouseMoveHandler = function (event: MouseEvent) {
        if (isTimeToUpdate()) {
          update(event);
        }
      };

      //-----------------------------------------

      var update = function (event: MouseEvent) {
        mouse.updatePosition(event);
        updateTransformStyle(
          (mouse.y / inner.offsetHeight / 2).toFixed(2),
          (mouse.x / inner.offsetWidth / 2).toFixed(2)
        );
      };

      var updateTransformStyle = function (x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTransform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
      };

      //-----------------------------------------

      container.onmouseenter = onMouseEnterHandler;
      container.onmouseleave = onMouseLeaveHandler;
      container.onmousemove = onMouseMoveHandler;
    })();
  }, [])
  return null;
}
export default AnimatedImage