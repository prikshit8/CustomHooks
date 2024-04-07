function useState(initialValue){
    var state = initialValue;

    function setState(newValue){
        state = newValue;
        render();
    }

    return [state,setState];
}


// initial render
render();

function render(){
    console.log('current count',count);
}

const [count,setCount] = useState(10);

setCount(count+1);
