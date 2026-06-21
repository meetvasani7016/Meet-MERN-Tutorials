# Visual Guide: Weather-Widget

```text

  [ Search Button Click ]
            |
            v
  [ Sanitized Input ] === query ===> [ mockWeatherDB ]
                                            |
                                  +---------+---------+
                                  | Found             | Not Found
                                  v                   v
                        [ Update card details ]  [ Show error msg ]

```