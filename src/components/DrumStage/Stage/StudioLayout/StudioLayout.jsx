import "./StudioLayout.css";

const StudioLayout = ({ left, center, right, bottom }) => {

    return (

        <div className="studio-layout">

            <div className="studio-main">

                <aside className="studio-left-column">

                    {left}

                </aside>

                <main className="studio-center-column">

                    {center}

                </main>

                <aside className="studio-right-column">

                    {right}

                </aside>

            </div>

            <footer className="studio-bottom">

                {bottom}

            </footer>

        </div>

    );

};

export default StudioLayout;