// initial counter value 
let count = 0

// get the hold of value and buttons 
const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

// lets loop through the btns node. 
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        // currentTarget gives which button clicked
        const styles = e.currentTarget.classList
        // using if to increase, rest or decrease the value span. 
        if(styles.contains('decrease')){
            count--
        }
        else if(styles.contains('increase')){
            count ++
        }
        else if(styles.contains('reset')){
            count = 0 
        }

        // using colors to make it cool! ;) 
        if(count > 0){
            value.style.color = "green"
        }
        else if(count < 0){
            value.style.color = "red"
        }
        if(count == 0){
            value.style.color = "black"
        }

        value.textContent = count
    })

})