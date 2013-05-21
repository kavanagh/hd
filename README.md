Endpoints
---------

These are all GET requests, as we're doing JSONP.

    /question

      Query params:
        article=ARTICLE_ID
        user=USER_ID # optional
      Return object:
        {
          "question": "What do you make of this?",
          "xTicks": "2",
          "yTicks": "2",
          "xLabels": "Outraged,Overjoyed",
          "yLabels": "Hot,Not",
          "answersCount": "7",
          "articleId": "/cms/s/2/8a21debe-944e-11e1-bb47-00144feab49a.html",
          "userId": "32ssddddfdf",
          "result": null // OR a vote object like {"x":1,"y":2}
        }

    /results
      article=ARTICLE_ID

    /setresult
      article=ARTICLE_ID
      user=USER_ID
      result=ANSWER # x/y object as a JSON string, eg. result={"x":2, "y":3}
