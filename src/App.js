import './App.css';
import {useState} from "react";

function App(){

    const [numeric1,setNumeric1]=useState("");
    const [numeric2,setNumeric2]=useState("");
    const [result,setResult]=useState(0);
    function handleChange1(e){
        if(Number(e.target.value)){
      setNumeric1(e.target.value)
        }
        else alert("Ошибка! Введите число.")


       }

    function handleChange2(e){
        if(Number(e.target.value)){
        setNumeric2(e.target.value)
        }
        else alert("Ошибка! Введите число.")
    }
    function handleResult(){

    }
        function handltPlus(){



              setResult(Number(numeric1)+Number(numeric2));
        }
         function handltMinus(){

           setResult(Number(numeric1)-Number(numeric2));
        }
        function handltUmn(){

           setResult(Number(numeric1)*Number(numeric2));
        }
        function handlDelen(){

           setResult(Number(numeric1)/Number(numeric2));
        }
        function handlReset(){
            setResult(0)
        }

    return(
        <div className="classApp">
            <div className="texbox">
                <input type="text" className="mytext" value={numeric1} onChange={handleChange1}></input>
                <input type="text" className="mytext" value={numeric2} onChange={handleChange2}></input>
            </div>
            <div className="calc">
            <>  <button className="button" onClick={handltPlus}>+</button>
                <button className="button" onClick={handltMinus}>-</button>
                <button className="button" onClick={handltUmn}>*</button>
                <button className="button" onClick={handlDelen}>/</button>
            </>

            </div>
            <div className="footer">
                <input type="text" className="result" value={result} onChange={handleResult}></input>
                <button className="reset" onClick={handlReset}>delete</button>
            </div>

        </div>)
}
export default App
