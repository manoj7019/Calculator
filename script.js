//Looping through all the items of numBtns
        // and returning their value onclick
        for (let i=0; i<numBtns.length; i++) {
            display.textContent = '';
            let numInput = '';
            numBtns[i].addEventListener('click', function getNumInput() {
                const numBtnValue = numBtns[i].value;
                display.textContent += numBtnValue;
                numInput += numBtnValue;
                console.log(`numInput = ${numInput}`);
                return numInput;   
                // console.log(numBtnValue);
                
            })
        }