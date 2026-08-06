import "./KeyboardBar.css";

import drumPads from "../../../../../data/drumPads";
import useKeyboard from "../../../../../hooks/useKeyboard";

const KeyboardBar = () => {

    const activeKey = useKeyboard();

    return (

        <div className="keyboard-bar">

            {

                drumPads.map((pad)=>(

                    <div

                        key={pad.id}

                        className={

                            `

                            keyboard-key

                            ${activeKey===pad.key?"active":""}

                            `

                        }

                    >

                        {pad.key}

                    </div>

                ))

            }

        </div>

    );

};

export default KeyboardBar;