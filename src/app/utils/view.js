

export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)
}

export const animationFrame =  !IN_BROWSER ? () => {} :
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame


export const cancelAnimationFrame = !IN_BROWSER ? () => {} :
    window.cancelAnimationFrame ||
    window.webkitcancelAnimationFrame ||
    window.mozcancelAnimationFrame ||
    window.mscancelAnimationFrame ||
    window.ocancelAnimationFrame
