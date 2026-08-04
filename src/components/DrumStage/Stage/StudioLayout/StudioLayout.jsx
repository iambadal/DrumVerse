import "./StudioLayout.css";

const StudioLayout = ({ left, center, right, bottom }) => {

    return (

        <div className="studio-layout">

            <aside className="studio-left">

                {left}

            </aside>

            <main className="studio-center">

                {center}

            </main>

            <aside className="studio-right">

                {right}

            </aside>

            <footer className="studio-bottom">

                {bottom}

            </footer>

        </div>

    );

};

export default StudioLayout;