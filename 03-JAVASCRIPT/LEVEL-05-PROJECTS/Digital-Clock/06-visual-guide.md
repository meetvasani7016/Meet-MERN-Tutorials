# Visual Guide: Digital-Clock

```text

  [ setInterval callback ] ---> triggers every 1000ms ---> [ isPaused? ]
                                                                |
                                                      +---------+---------+
                                                      | Yes               | No
                                                      v                   v
                                                 [ Do Nothing ]   [ Update DOM time ]

```