const hrsHand = document.querySelector(".Hrs")
const minsHand = document.querySelector(".Mins")
const secsHand = document.querySelector(".Secs")

function clockRotate(){
    const currentTime = new Date()
    const Hrs = currentTime.getHours()
    const Mins = currentTime.getMinutes()
    const Secs = currentTime.getSeconds()

    const SecsFraction = Secs/60
    const MinsFraction = (SecsFraction + Mins)/60
    const HrsFraction = (MinsFraction + Hrs)/12

    const SecsAngle = SecsFraction*360
    const MinsAngle = MinsFraction*360
    const HrsAngle = HrsFraction*360

    secsHand.style.transform = `rotate(${SecsAngle}deg)`
    minsHand.style.transform = `rotate(${MinsAngle}deg)`
    hrsHand.style.transform = `rotate(${HrsAngle}deg)`
}
setInterval(clockRotate, 100)
