import {useState} from "react";
import './App.css';

function App() {
            const [weight, setWeight] = useState();
            const [bottles, setBottles] = useState();
            const [time, setTime] = useState();
            const [gender, setGender] = useState("male");
            const [result, setResult] = useState(0);

            function handleSubmit(e) {
                e.preventDefault();
                let alko = 0;
                let litre = bottles * 0.33;
                let grams = litre * 8 * 4.5;
                let burn = weight / 10;
                let gleft = grams - (burn * time);
                if (gender === "male") {
                    alko = gleft / (weight * 0.7);
                }
                else {
                    alko = gleft / (weight * 0.6);
                }
                setResult(alko);
            }

            return (
                <>
                <h3>Calculating alcohol blood level</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Weight</label>
                        <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Bottles</label>
                        <input type="number" name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}></input>
                    </div>
                    <div>
                      <label>Time</label>
                      <input type="number" name="time" value={time} onChange={e => setTime(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Gender</label>
                        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
                        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
                    </div>
                    <div>
                        <output>{result.toFixed(1)}</output>
                    </div>
                    <button>Calculate</button>
                </form>
                </>
            )
}

export default App;
