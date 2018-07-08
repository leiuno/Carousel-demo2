let n
init()
function init(){
  n = 1
  $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}
function x(n){
  if(n > 4){
    n = n % 4
    if(n === 0){
      n = 4
    }
  }
  return n 
}

function makeCurrent($node){
  return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
  return $node.removeClass('enter current').addClass('leave')
}
function makeEnter($node){
  return $node.removeClass('leave enter').addClass('enter')
}
function getImage(n){
  return $(`.images > img:nth-child(${x(n)})`)
}
let timeId = setTimer()
function setTimer(){
  return setInterval(function(){
    makeLeave(getImage(n))
      .one('transitionend',function(e){
      makeEnter($(e.currentTarget))
    })
  makeCurrent(getImage(n+1))
  n += 1
  },2000)
}

$('.window').on('mouseenter',function(){
  clearInterval(timeId)
})
$('.window').on('mouseleave',function(){
  timeId = setTimer()
})