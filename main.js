const myAllHTML = document;

const products = [
  {
    productName: "bread",
    productData: {
      weight: 200,
      certificate: true,
      dateOfExpiry: "27/10/2022",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2560px-Flag_of_Ukraine.svg.png",
    productPrice: 11.7,
  },
  {
    productName: "milk",
    productData: {
      weight: 1000,
      certificate: true,
      dateOfExpiry: "28/10/2022",
      sugarFree: true,
    },
    productProvider: "FOP Fil D.V.",
    productCountry:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2560px-Flag_of_Ukraine.svg.png",
    productPrice: 20.55,
  },
  {
    productName: "sugar",
    productData: {
      weight: 900,
      certificate: true,
      dateOfExpiry: "28/10/2023",
      sugarFree: false,
    },
    productProvider: "LLC Dolina-99",
    productCountry:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2560px-Flag_of_Ukraine.svg.png",
    productPrice: 22.0,
  },
  {
    productName: "butter",
    productData: {
      weight: 200,
      certificate: true,
      dateOfExpiry: "28/12/2022",
      sugarFree: false,
    },
    productProvider: "LLC Yagotynske",
    productCountry:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2560px-Flag_of_Ukraine.svg.png",
    productPrice: 60.7,
  },
  {
    productName: "coffe",
    productData: {
      weight: 1000,
      certificate: true,
      dateOfExpiry: "28/12/2023",
      sugarFree: true,
    },
    productProvider: "Varka GmbH",
    productCountry:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII=",
    productPrice: 300.0,
  },
  {
    productName: "beer",
    productData: {
      weight: 500,
      certificate: true,
      dateOfExpiry: "28/12/2022",
      sugarFree: false,
    },
    productProvider: "Grimbergen LLC",
    productCountry:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAFVBMVEUAAADvM0D92iXJrR3/3Sb5si7uI0Hc9J4uAAAA6ElEQVR4nO3PMREAIAwEsAIF/5Jr4icucZCqsNM7qe9bWemwsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsfFP4wF6L9AwC9pq5wAAAABJRU5ErkJggg==",
    productPrice: 65.0,
  },
  {
    productName: "beer",
    productData: {
      weight: 500,
      certificate: true,
      dateOfExpiry: "28/12/2022",
      sugarFree: false,
    },
    productProvider: "Grimbergen LLC",
    productCountry:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAFVBMVEUAAADvM0D92iXJrR3/3Sb5si7uI0Hc9J4uAAAA6ElEQVR4nO3PMREAIAwEsAIF/5Jr4icucZCqsNM7qe9bWemwsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsfFP4wF6L9AwC9pq5wAAAABJRU5ErkJggg==",
    productPrice: 65.0,
  },
  {
    productName: "whiskey",
    productData: {
      weight: 700,
      certificate: true,
      dateOfExpiry: "28/12/2023",
      sugarFree: false,
    },
    productProvider: "Ballentains LLC",
    productCountry:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAbFBMVEX////IEC4BIWnFABjrvcEAAF8AHmjICSvKKD3EAADHACahprwAB2HGACCprsIAGWfeiZH13N799vfTWmfEAAkAF2aaoLgAAFXFABPtxcjJITgAE2Xe4OfVZHDgk5vSU2Lz1tnRSVr67e7bfIeRPeizAAAFEElEQVR4nO3dbVcaMRAF4Fi76PpS38CqVEX9//+xWo9lgQWS3Htn4jlzP/UDbiYPsJTdMEmPV2lvTmfd5IcuZ6fLoY6PDnbk6HhQ1JmwpEk3HxR1/TRW1Un/vEgn/U0G4K8LIWBzfJNu9muAdzk9H8P75/b/H36AjfFNuotcvA8+d8Cm+IrwPvmcARviK8T74ssGnAgAm+ErxlvyOQI2wleBN+RzA2yCrwpvlc8JsAG+Srx1PhdAd75qvE0+B0BnPgAvpfOSB68Csv4b48oH4VX8AR/QkQ/EawLQjY+A1wCgEx8Jzx3QhY+I5wzowEfGcwU05yPizUkHAgCN+Qouhu6b8yytH6y3BzTl4843UZ+NOkBDPvaLJY0d1BjQjI8/z/R1YNbJtALQiE8xx6Q8eEt8mvkl9QBt8KnmlkSDlFzOkvPpXhhJNlA+oJhP+a5KwsFyAaV82lPSBp8DoJBPfT4f4TMHlPHp5zHKZ/wpLOKzeBFs4TMFlPDZvIO28hkCCvisTj87+MwA6Xx25+6dfEaAZD7LD749fCaAVD7br557+QwKIvJZf2/P4JMXReOzv+iRxSe+oEri87jom8nHv8zN5vO5Z5PNJ3x2CXxeN7wK+GSAMJ/fvZoiPtHJGeTzvE9TyCd5piE+15tc5XyCggE+X7wqPvrXomo+b7xKPjJgV8fXueNV81EBu9savtvOHQ/gYwL+qeEb/JHf2kSAT7LIMJ+Pgwf+vALiEwAW83niwXx0wEI+718FpA7P7+G5//rybiR9/7Lg872+9f3IYNMcvNP3svFkzckwFee+yDLBByX4oAQflOCDEnxQgg9K8EEJPijfje9nU7l/2M33cO9d4WrSYVvZqffu513fWkYakUTyE3xQgg9K8EEJPijBByX4oAQflOCDEnxQgg9K8EEJPijBByX4oAQflOCDEnxQgg9K8EEJPijBByX4oAQflOCDEnxQgg9K8EEJPiixwgpKrO+D4r06cz3fbXVpYwk+KMEHJfigBB+U4IMSfFCCD0rwQflufIR2EiudNLbl6mY62mHj7XXlYRS+xctoh427y+vlY0idNLh9XLbj9SebGufT4YR4fHnjUfq4NIVHfPNmAfp2EaLjUc99FoC0DmrIJNAOahCgTwc1Hh6jf58XIKV7JFQ8qXukDyChdymIR+td6gEId84lFE3rnGsPCPZtphRM7NtsDQh1DScVS+0abgsI9KwvLLTfWii5Zz2tLi6frEj6jgl2gJX7dVALFOzXYQVYtVsMuTjJbjE2gBV7FRUWtv/kLNqryAKweKcsOp5wpyxBraV8BgUJ92lTAxbtEigqRrpLIFQztkug0TMp3qNSCZi9Q6oMz2CHVB1g5v68QjyT/XlVgFm7Q0vxjHaH1gBm7E2uGVjPZzGPET5jPCGf/l20wWeOJ+VTAybZYPm3AKV8WsAkGqjk/qmYTwmYLAbx5tPNLS0HoN/DaIhPBZi0z047fJo5ps8De90rsORTzDO54xny8eea3PFM+diAae6NZ8xHBZztP45+mZcxH/OeiD+eA59kYacTngufCaDRAmsXPjmg1ep0Lz4poBmeI58M0BDPlQ8EPPTHc+bDAGvx4B+UDOLMhwD64zXAVw/oj9cEXy2gP14jfHWA/njN8NUAluHxPm2HaYavHNAfrym+UkB/vMb4ygC347Euhu5PY3wlF1TT4nkM7+Doafi7/5kQr0G+D8D5oKitgI9/ASzsca5ETv80AAAAAElFTkSuQmCC",
    productPrice: 505.0,
  },
  {
    productName: "chocolate",
    productData: {
      weight: 90,
      certificate: true,
      dateOfExpiry: "22/12/2023",
      sugarFree: false,
    },
    productProvider: "Nestle S.A.",
    productCountry:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAJFBMVEX/AAD/////ysr/xMT/3t7/n5//y8v/zs7/qqr/wMD/7u7/4eEHU006AAABOElEQVR4nO3d2wkCQRAAQT3fmn++BtDgHiK34FUFsMz098AeDgAAAAAAAAAAAH/qcl0+u15mj7i523HkNnvEzS3DJsvsETenSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCa1pyb30yqP57DJ87HuqfvslYdew11/7TV75aHz5k3Os1ce0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNCn3J+VO6Xt7umdbS5PSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPyf3H55xoAAAAAAAAAANixNz74Hi40gno1AAAAAElFTkSuQmCC",
    productPrice: 25.85,
  },
  {
    productName: "tomato",
    productData: {
      weight: 1500,
      certificate: false,
      dateOfExpiry: "29/10/2022",
      sugarFree: true,
    },
    productProvider: "Baykar LLC",
    productCountry:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEXjChf////iAAD0trjjABLjABDjBRTjAAz3ycv86OnnQEf0r7Hsb3T97/DiAAb+9PXxnaDyo6b/+fn1vb/6293kGSTpU1nvh4v74+TvjJDmO0LqXmP519nwk5fkFB/ugYXmKzToSU/teHz3xsjlIivten7pWF3rZ2z50dPlHynmMTrnPUXxmp3oTVPzqq3oRk11eUc8AAAEhUlEQVR4nO3deXuiMBAGcJkGEG+teJ/VerW23//bLVGrrkxUbCoQ3t9/7tPdpWOOSQhDLgcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM/iCFeynbgvJBEE7cwLrVbre2LvPrhxX1SMnOD3H5Vq+Y51Ul4Vx9/Bn9txX1wsKkSll7LFyrc3RCLuK3yyoMssZ3w8DppdP1OdyCa/pmgh516nVIn7Up9E0KR4OyA7g0U22go59TsjIq0K5o8rNr1VI4QkULQp7ov+W7ReRYtIoLwkg3M5h0p3RaFx0ZSK5o4qNt0YWxv5Wmk62me2ue/ScPYzOXXWhvYftzK4FpDmsLBL7A9DquPKT5P2oa9tjQwKza+kJNX6nF3nyAVQ25M/UTIwKNRTzzfl8ZUFTrAq6svG0jYuKNRrKNtIEJHrf7lCi455QXEnylZyV/5Roa5ljY0Kim2rxpLy4s48lSYDa2lQUBxSzTgzcfev6VLN6pmzJlTmJfUoi5kg4/McUxY/tFSEJOoAQYsXQ3qPPVKEJHrKQdOSGb2H8nxI3h74zt2Nr/8Cn0+17hs+1A2MWCE7xGcmpowMjyB+V62jZU/ETuU0JHy+52x07IhQPZfGoNAXG5Kulp5Dr/kU9kAxYpd+TT27ifSSxjUQDdlmstWTZQQxsXpp25Z0yONCMtP05cqY6Bmsn6jSZ5uJru9WxsQqpqz30CsXEm0D4y4mKduVdIgdYRe61iz7mDTml/uW9q2NuxjxXaej7YL3MbEG//2DQUDWn7XEBoVPTj51x8Q6RSAIyHzYtKxRYnM56nAxmWg7g/QTE6u1C4pL1Kt1Tp+TSLAbJ/q6zikmVVcEAZnWvct2kzgVdn9N49x5jEkwlbW+jtvgzeSGRJHEPrKVpPoPjjGxzjck/AQfEOSzk7W+4e8sJmcSna+wdzAa+q5YsDFJ9mYVu8Omq7OLIC8rMfOal+z1D3EtW0tiHwRk9J5nk+RCojf2nRx3zb+fdmRAxqojYHo2q/6MPeEu+pe5gwxIW30mLun7bvaGu+rHbmEcOOR3rx12qorE5vR77ofuxu2s2cn3RGPu8zfQTsIwnoRh3mEgPwlDHhuG9U4Y1sVh2D8Jwz5bGPZjGdi3D8P9nTD+PqCX6fuAuF/MwLmCMJw/CcM5JQbOs4Xh3CMD52PDcI6aQTU2Jlk+b4/nMjiq53ceW/akbeJVwHNeYcrnAaMHhbaGPA+I50Y5iiRFPl8cYX/JqOeLFXc1pJkT4Tn0egoTeTXb1VKvoG9Mz5Gu17W4PcGSrGvxblRIrtc/ad+uf9L3zKt/8os6OYKoL4cj80Jyo55SQ11PSXSNrackJ44odbfE/3W3pkaGRPaC2/XZ3rb+vj7baJqF+mwR6vhdjMcG1/ELkP9Avcd+6raho3mgLqhrbL85IoH6sSGC5vfWGV61jB5Jztnkf6Ie9aU76pa3R5lpI0dX6ts38u1J9urb73DvQfBWxXEhs+9B2Du8L2P9sZXvy3Az/76ME7xXBQAAAAAAAAAAAAAAAAAAAAAAAAAAAADALP8AXfg+8aaic1sAAAAASUVORK5CYII=",
    productPrice: 46.85,
  },
  {
    productName: "juice",
    productData: {
      weight: 900,
      certificate: true,
      dateOfExpiry: "29/10/2023",
      sugarFree: false,
    },
    productProvider: "PepsiCo",
    productCountry:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2560px-Flag_of_Ukraine.svg.png",
    productPrice: 36.8,
  },
  {
    productName: "potato",
    productData: {
      weight: 3000,
      certificate: false,
      dateOfExpiry: "29/11/2022",
      sugarFree: true,
    },
    productProvider: "Lukashenko&Partners",
    productCountry:
      "data:image/png;base64,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",
    productPrice: 12.0,
  },
  {
    productName: "yogurt",
    productData: {
      weight: 180,
      certificate: true,
      dateOfExpiry: "29/10/2022",
      sugarFree: false,
    },
    productProvider: "Danone",
    productCountry:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AI5XtKTkAFpJwe7jzfYXtHTAyByNzAAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII=",
    productPrice: 32.0,
  },
  {
    productName: "coca-cola",
    productData: {
      weight: 1000,
      certificate: true,
      dateOfExpiry: "29/10/2023",
      sugarFree: false,
    },
    productProvider: "The Coca-Cola Company",
    productCountry:
      "data:image/png;base64,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",
    productPrice: 27.0,
  },
  {
    productName: "tea",
    productData: {
      weight: 100,
      certificate: true,
      dateOfExpiry: "29/10/2023",
      sugarFree: true,
    },
    productProvider: "Ahmad Tea",
    productCountry:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAbFBMVEX////IEC4BIWnFABjrvcEAAF8AHmjICSvKKD3EAADHACahprwAB2HGACCprsIAGWfeiZH13N799vfTWmfEAAkAF2aaoLgAAFXFABPtxcjJITgAE2Xe4OfVZHDgk5vSU2Lz1tnRSVr67e7bfIeRPeizAAAFEElEQVR4nO3dbVcaMRAF4Fi76PpS38CqVEX9//+xWo9lgQWS3Htn4jlzP/UDbiYPsJTdMEmPV2lvTmfd5IcuZ6fLoY6PDnbk6HhQ1JmwpEk3HxR1/TRW1Un/vEgn/U0G4K8LIWBzfJNu9muAdzk9H8P75/b/H36AjfFNuotcvA8+d8Cm+IrwPvmcARviK8T74ssGnAgAm+ErxlvyOQI2wleBN+RzA2yCrwpvlc8JsAG+Srx1PhdAd75qvE0+B0BnPgAvpfOSB68Csv4b48oH4VX8AR/QkQ/EawLQjY+A1wCgEx8Jzx3QhY+I5wzowEfGcwU05yPizUkHAgCN+Qouhu6b8yytH6y3BzTl4843UZ+NOkBDPvaLJY0d1BjQjI8/z/R1YNbJtALQiE8xx6Q8eEt8mvkl9QBt8KnmlkSDlFzOkvPpXhhJNlA+oJhP+a5KwsFyAaV82lPSBp8DoJBPfT4f4TMHlPHp5zHKZ/wpLOKzeBFs4TMFlPDZvIO28hkCCvisTj87+MwA6Xx25+6dfEaAZD7LD749fCaAVD7br557+QwKIvJZf2/P4JMXReOzv+iRxSe+oEri87jom8nHv8zN5vO5Z5PNJ3x2CXxeN7wK+GSAMJ/fvZoiPtHJGeTzvE9TyCd5piE+15tc5XyCggE+X7wqPvrXomo+b7xKPjJgV8fXueNV81EBu9savtvOHQ/gYwL+qeEb/JHf2kSAT7LIMJ+Pgwf+vALiEwAW83niwXx0wEI+718FpA7P7+G5//rybiR9/7Lg872+9f3IYNMcvNP3svFkzckwFee+yDLBByX4oAQflOCDEnxQgg9K8EEJPijfje9nU7l/2M33cO9d4WrSYVvZqffu513fWkYakUTyE3xQgg9K8EEJPijBByX4oAQflOCDEnxQgg9K8EEJPijBByX4oAQflOCDEnxQgg9K8EEJPijBByX4oAQflOCDEnxQgg9K8EEJPiixwgpKrO+D4r06cz3fbXVpYwk+KMEHJfigBB+U4IMSfFCCD0rwQflufIR2EiudNLbl6mY62mHj7XXlYRS+xctoh427y+vlY0idNLh9XLbj9SebGufT4YR4fHnjUfq4NIVHfPNmAfp2EaLjUc99FoC0DmrIJNAOahCgTwc1Hh6jf58XIKV7JFQ8qXukDyChdymIR+td6gEId84lFE3rnGsPCPZtphRM7NtsDQh1DScVS+0abgsI9KwvLLTfWii5Zz2tLi6frEj6jgl2gJX7dVALFOzXYQVYtVsMuTjJbjE2gBV7FRUWtv/kLNqryAKweKcsOp5wpyxBraV8BgUJ92lTAxbtEigqRrpLIFQztkug0TMp3qNSCZi9Q6oMz2CHVB1g5v68QjyT/XlVgFm7Q0vxjHaH1gBm7E2uGVjPZzGPET5jPCGf/l20wWeOJ+VTAybZYPm3AKV8WsAkGqjk/qmYTwmYLAbx5tPNLS0HoN/DaIhPBZi0z047fJo5ps8De90rsORTzDO54xny8eea3PFM+diAae6NZ8xHBZztP45+mZcxH/OeiD+eA59kYacTngufCaDRAmsXPjmg1ep0Lz4poBmeI58M0BDPlQ8EPPTHc+bDAGvx4B+UDOLMhwD64zXAVw/oj9cEXy2gP14jfHWA/njN8NUAluHxPm2HaYavHNAfrym+UkB/vMb4ygC347Euhu5PY3wlF1TT4nkM7+Doafi7/5kQr0G+D8D5oKitgI9/ASzsca5ETv80AAAAAElFTkSuQmCC",
    productPrice: 49.0,
  },
];

const div = document.createElement("div");
const ul = document.createElement("ul");
const listItem = document.createElement("li");
div.append(ul);

document.body.append(div);

function createProductList() {
  products.forEach((products) => {
    const li = document.createElement("li");
    const spanCountry = document.createElement("span");
    const spanSert = document.createElement("span");

    li.innerHTML = `${products.productName}: 
      ${products.productData.weight}g,   
      EXP data: ${products.productData.dateOfExpiry}, 
      Sugar Free: ${products.productData.sugarFree} 
      ${products.productProvider},  
      Price: ${products.productPrice} UAH`;

    if (products.productData.certificate === false) {
      spanSert.innerHTML = " ! ";
    }

    spanCountry.innerHTML = `<img src="${products.productCountry}" alt="img" width = 20px height = 16px/>`;

    li.classList.add("list");
    spanCountry.classList.add(`country`);
    spanSert.classList.add(`${products.productData.certificate}`);

    ul.append(li);
    li.append(spanCountry);
    li.append(spanSert);
  });
}
createProductList();

const listStyle = document.getElementsByClassName("list");
const convertedArray = Array.from(listStyle);
for (let i = 0; i < convertedArray.length; i++) {
  if (i % 2 === 0) {
    convertedArray[i].classList.add("style");
  }
}

const totalPrice = products.map((item) => item.productPrice);
function sumTotalPrice(totalPrice) {
  let sum = 0;
  for (let i = 0; i < totalPrice.length; i++) {
    sum += totalPrice[i];
  }
  return sum;
}

const firstParagraph = document.createElement("p");
div.append(firstParagraph);
firstParagraph.innerHTML = `Total sum is ${sumTotalPrice(totalPrice).toFixed(
  2
)} UAH`;

const mostExpenciveProduct = products.reduce((min, max) =>
  min.productPrice > max.productPrice ? min : max
);
const secondParagraph = document.createElement("p");
div.append(secondParagraph);
secondParagraph.innerHTML = `The most expencive product is ${mostExpenciveProduct.productName}!`;

const averagePrice = sumTotalPrice(totalPrice) / totalPrice.length;
const thirdParagraph = document.createElement("p");
div.append(thirdParagraph);
thirdParagraph.innerHTML = `Average Price is ${averagePrice.toFixed(2)} UAH`;
