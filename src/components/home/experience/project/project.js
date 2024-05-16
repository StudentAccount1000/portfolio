const Project = () => {
    const github_logo = "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z";

    const openExtLinkNewTab = (url_string) => {
        const newTab = window.open(url_string, "_blank", "noopener,noreferrer") 
        {/*Need noopener noreferrer in order to increase security */}
        if (newTab) { newTab.opener = null }
    }
    
    return ( <div>
        <div style={{display: "flex"}}>
            <div class="card">
                <div class="heading">
                    <p>Kmeans++ implementation using CUDA</p>
                </div>
                <div class="categories">
                    <span>CUDA</span>
                    <span>Data Science</span>
                    <span>C++</span>
                </div>
                <div class="main-content">
                    <p>Used CUDA, the NVIDIA GPU programming language, to implement a parallelized K-Means++ algorithm. My group used this program to analyze real world Baltimore crime data to analyze hundreds on thousans of reported crimes and cluster them by location.</p>
                </div>
                <div class="github-link">
                    <button class="GH-btn" onClick={() => openExtLinkNewTab("https://github.com/StudentAccount1000/CUDA_kmeanspp")}>
                        <span class="svgContainer">
                        <svg fill="white" viewBox="0 0 496 512" height="1.6em"><path d={github_logo}></path></svg>
                        </span>
                        <span class="BG"></span>
                    </button>
                </div>
                <div class="footer">CPSC 479</div>
            </div>

            <div class="card" style={{marginLeft: "10%"}}>
                <div class="heading">
                    <p>Fishology Smart Aquarium</p>
                </div>
                <div class="categories">
                    <span>SQL</span>
                    <span>Sensor Processing</span>
                    <span>Full Stack</span>
                </div>
                <div class="main-content">
                    <p>This was my senior project. Three sensors (temperature, ppM, and pH) are polled for their water data every minute. The data can be accessed over the network by users, and can automatically detect unsafe water readings for known fish in the tank. Data can be viewed in a graph either by daily or weekly. </p>
                </div>
                
                <div class="github-link">
                    <button class="GH-btn" onClick={() => openExtLinkNewTab("https://github.com/benninghoven/smart-aquarium")}>
                        <span class="svgContainer">
                        <svg fill="white" viewBox="0 0 496 512" height="1.6em"><path d={github_logo}></path></svg>
                        </span>
                        <span class="BG"></span>
                    </button>
                </div>
                <div class="footer">
                    CPSC 491
                </div>
            </div>
        </div>

        <div style={{display: "flex", marginTop: "60px"}}>
            <div class="card">
                <div class="heading">
                    <p>FTP Server/Client</p>
                </div>
                <div class="categories">
                    <span>Python</span>
                    <span>Network Communications</span>
                </div>
                <div class="main-content">
                    <p>My group implemented a Python FTP server, which allows for a server and clients to connect over the internet. The server allows for seeing existing files, putting files, and pulling files. Custom headers were used, and separate data and control sockets were used for better communication.</p>
                </div>
                
                <div class="github-link">
                    <button class="GH-btn" onClick={() => openExtLinkNewTab("https://github.com/NADEE-MJ/cpsc-471-project")}>
                        <span class="svgContainer">
                        <svg fill="white" viewBox="0 0 496 512" height="1.6em"><path d={github_logo}></path></svg>
                        </span>
                        <span class="BG"></span>
                    </button>
                </div>
                <div class="footer">
                    CPSC 471
                </div>
            </div>

            <div class="card" style={{marginLeft: "10%"}}>
                <div class="heading">
                    <p>Quiz Website</p>
                </div>
                <div class="categories">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Front-End</span>
                </div>
                <div class="main-content">
                    <p>A fun and simple website project developed for CPSC 349 (Web Development). The site features two quizzes, a regular quiz with questions relating to HTML/CSS/JavaScript, and another which uses fun and confusing JavaScript tricks to create a quiz. Semi-inspired by the impossible quiz</p>
                </div>
                
                <div class="github-link">
                    <button class="GH-btn" onClick={() => openExtLinkNewTab("https://github.com/StudentAccount1000/quiz-website")}>
                        <span class="svgContainer">
                        <svg fill="white" viewBox="0 0 496 512" height="1.6em"><path d={github_logo}></path></svg>
                        </span>
                        <span class="BG"></span>
                    </button>
                </div>
                <div class="footer">
                    CPSC 349
                </div>
            </div>
        </div>
    </div> );
}
 
export default Project;