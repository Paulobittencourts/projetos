function borderRadius(){
    const leftUp = document.getElementById('left-up').value
    const rightUp = document.getElementById('right-up').value
    const rightDown = document.getElementById('right-down').value
    const leftDown = document.getElementById('left-down').value
    const radius = document.getElementById('box')


    const text = document.getElementById('code')

    if(rightUp > 0){
        return radius.style.borderRadius = `${leftUp}px ${rightUp}px ${rightDown}px ${leftDown}px`, 
                text.textContent = `border-radius: ${leftUp}px ${rightUp}px ${rightDown}px ${leftDown}px;`
            
    }else{
        document.getElementById('right-up').value = leftUp
        document.getElementById('right-down').value = leftUp
        document.getElementById('left-down').value = leftUp
        return radius.style.borderRadius = `${leftUp}px`, text.textContent = `border-radius: ${leftUp}px;`
    }
}

function copyText(){
    var range = document.createRange()
    range.selectNode(document.getElementById('code'))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()

    alert('Copied the text: '+ range)

}
