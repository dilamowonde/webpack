export class ComponentService {
    constructor(){
        this.numberOneInput = document.getElementById('input-1')
        this.numberTwoInput = document.getElementById('input-2')
        this.addValuesButton = document.getElementById('add')
        this.resultDiv = document.getElementById('result')
    }
    getInputs(){
        return [this.numberOneInput.value, this.numberTwoInput.value]
    }
    setResult(str){
        this.resultDiv.innerText = str
    }
    onClick(cb){
        this.addValuesButton.addEventListener('click', cb)
    }

}

