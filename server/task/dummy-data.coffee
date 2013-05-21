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
      articleId: '/cms/s/0/d0504cfe-c157-11e2-b93b-00144feab7de.html'
      question: 'Is this a good deal for both companies?'
      xTicks: '2'
      yTicks: '2'
      xLabels: 'Bad for Yahoo,Good for Yahoo'
      yLabels: 'Bad for Tumblr,Good for Tumblr'
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

redisUrl = process.env.REDISTOGO_URL or "redis://localhost:6379"
redis = require("redis-url").connect(redisUrl)


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

nextQuestion()


redis.del 'answer:4008770966:/cms/s/0/d0504cfe-c157-11e2-b93b-00144feab7de.html', ->
  console.log 'deleted lukes answer', arguments
