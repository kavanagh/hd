dummy = {
  questions: [
      articleId: '/cms/s/2/8a21debe-944e-11e1-bb47-00144feab49a.html'
      question: 'What do you make of this?'
      xTicks: '2'
      yTicks: '2'
      xLabels: 'Outraged,Overjoyed'
      yLabels: 'Hot,Not'
    ,
      articleId: '/cms/s/3/2ca420d4-bee2-11e2-a9d4-00144feab7de.html'
      question: 'What do you make of this?'
      xTicks: '2'
      yTicks: '2'
      xLabels: 'Stupid,Clever'
      yLabels: 'Significant,Meh'
    ,
      articleId: '/cms/s/3/6f4e6cc2-c0c8-11e2-8c63-00144feab7de.html'
      question: 'How is the deal for Yahoo! shareholders?'
      xTicks: '2'
      yTicks: '1'
      xLabels: 'Bad,Good'
      yLabels: ''
  ]

  # resultsX:
  #   '/cms/s/2/8a21debe-944e-11e1-bb47-00144feab49a.html':
  #     '1,1': '2'
  #     '2,1': '5'
  #     '2,2': '4'
  # resultsY:
  #   '/cms/s/2/8a21debe-944e-11e1-bb47-00144feab49a.html':
  #     '1,1': '2'
  #     '2,1': '5'
  #     '2,2': '4'
}

nextQuestion = ->
  question = dummy.questions.pop()
  if question
    
    # HMSET question:/cms/s/2/8a21debe-944e-11e1-bb47-00144feab49a.html question "What do you think about this?" xTicks 2 yTicks 2 xLabels "Outraged,Overjoyed" yLabels "Stupid,Clever"
    redis.hmset "question:" + question.articleId, "question", question.question, "xTicks", question.xTicks, "yTicks", question.yTicks, "xLabels", question.xLabels, "yLabels", question.yLabels, (err, result) ->
      throw err  if err
      throw "ERROR: result from redis was: " + result  if result isnt "OK"
      console.log "SAVED QUESTION", question
      nextQuestion()

dummyData = require("./dummy-data")
questions = dummyData.questions
redisUrl = process.env.REDISTOGO_URL or "redis://localhost:6379"
redis = require("redis-url").connect(redisUrl)
nextQuestion()
