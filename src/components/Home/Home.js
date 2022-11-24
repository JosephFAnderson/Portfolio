import './Home.css';
import TypeWriterEffect from 'react-typewriter-effect';


function Home() {
    return(
        <>
            <TypeWriterEffect 
                textStyle={{
                    fontWeight: 500,
                    fontSize: "2.5em"
                }}
                startDelay={100} 
                cursorColor="black" 
                multiText={[
                    "Hello!",
                    "Welcome to my portfolio.",
                    "Please have a look around.",
                    "Feel free to contact me if you have any questions.",
                    "Joseph Anderson" 
                ]}
                multiTextDelay={1000}
                typeSpeed={50}
                hideCursorAfterText={true} />
        </>
    )
}

export default Home;