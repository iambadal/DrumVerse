import "./StageFrame.css";

const StageFrame = ({ children }) => {

    return (

        <div className="stage-frame">

            <div className="frame-top"/>

            <div className="frame-left"/>

            <div className="frame-right"/>

            <div className="frame-bottom"/>

            {children}

        </div>

    );

};

export default StageFrame;