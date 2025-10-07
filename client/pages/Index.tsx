import projects from "../projects.json";

interface Project {
    title: string;
    description: string;
    image: string;
    demoUrl?: string;
    githubUrl?: string;
}

const ArrowIcon = ({ filled = false }: { filled?: boolean }) => (
    <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
    >
        <circle
            cx="20.5"
            cy="20.5"
            r="20"
            stroke="#667561"
            fill={filled ? "#667561" : "none"}
        />
        <path
            d="M14 28L28 14M28 14H14M28 14V28"
            stroke={filled ? "#F2F2F0" : "#667561"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const GitHubIcon = () => (
    <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="20.5" cy="20.5" r="20" stroke="#667561" />
        <path
            d="M17.8333 27.0223C13.6667 28.2723 13.6667 24.939 12 24.5223M23.6667 29.5223V26.2973C23.6979 25.9 23.6442 25.5005 23.5092 25.1255C23.3741 24.7505 23.1608 24.4085 22.8833 24.1223C25.5 23.8307 28.25 22.839 28.25 18.289C28.2498 17.1255 27.8022 16.0067 27 15.164C27.3799 14.1461 27.353 13.021 26.925 12.0223C26.925 12.0223 25.9417 11.7307 23.6667 13.2557C21.7567 12.738 19.7433 12.738 17.8333 13.2557C15.5583 11.7307 14.575 12.0223 14.575 12.0223C14.147 13.021 14.1201 14.1461 14.5 15.164C13.6918 16.0129 13.2438 17.1419 13.25 18.314C13.25 22.8307 16 23.8223 18.6167 24.1473C18.3425 24.4306 18.1311 24.7685 17.9961 25.1389C17.8611 25.5094 17.8057 25.904 17.8333 26.2973V29.5223"
            stroke="#667561"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

const LinkedInIcon = () => (
    <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="20.5" cy="20.5" r="20" stroke="#667561" />
        <path
            d="M23.8 17.1053C24.9139 17.1053 25.9822 17.5378 26.7698 18.3077C27.5575 19.0776 28 20.1217 28 21.2105V26H25.2V21.2105C25.2 20.8476 25.0525 20.4995 24.7899 20.2429C24.5274 19.9863 24.1713 19.8421 23.8 19.8421C23.4287 19.8421 23.0726 19.9863 22.8101 20.2429C22.5475 20.4995 22.4 20.8476 22.4 21.2105V26H19.6V21.2105C19.6 20.1217 20.0425 19.0776 20.8302 18.3077C21.6178 17.5378 22.6861 17.1053 23.8 17.1053Z"
            stroke="#667561"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M16.8 17.7895H14V26H16.8V17.7895Z"
            stroke="#667561"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M15.4 15.7368C16.1732 15.7368 16.8 15.1242 16.8 14.3684C16.8 13.6127 16.1732 13 15.4 13C14.6268 13 14 13.6127 14 14.3684C14 15.1242 14.6268 15.7368 15.4 15.7368Z"
            stroke="#667561"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

export default function Index() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <header className="w-full border-b border-[#667561]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="font-fell text-2xl sm:text-3xl lg:text-[38px] text-black">
                        Le journal d'Akim
                    </h1>
                    <div className="flex items-center gap-3 sm:gap-4">
                        <a
                            href="#projects"
                            className="font-gelasio text-lg sm:text-xl text-black hover:text-[#667561] transition-colors"
                        >
                            Projects
                        </a>
                        <button
                            className="hover:opacity-80 transition-opacity"
                            aria-label="GitHub"
                        >
                            <GitHubIcon />
                        </button>
                        <button
                            className="hover:opacity-80 transition-opacity"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon />
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center">
                <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-28 py-12 lg:py-20">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
                        <div className="flex flex-col items-center text-center">
                            <h2 className="font-gelasio text-3xl sm:text-4xl lg:text-[36px] font-normal leading-normal text-black mb-6">
                                Software Developer
                                <br />
                                Based in YVR
                            </h2>
                            <button className="flex items-center gap-4 hover:opacity-80 transition-opacity group">
                                <ArrowIcon />
                                <span className="font-gelasio text-xl sm:text-2xl text-black group-hover:text-[#667561] transition-colors">
                                    Connect
                                </span>
                            </button>
                        </div>
                        <div className="relative">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/d5945ecfb25f5347657da09a62ba60ed26237a81?width=674"
                                alt="Profile"
                                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[337px] lg:h-[337px] object-cover rounded-sm"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10 mt-12 lg:mt-16">
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/23a88d4bf31df5007eefb43dc932a590072a3ab6?width=300"
                            alt="FISPAN"
                            className="h-12 sm:h-14 lg:h-[57px] w-auto"
                        />
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/43bf9f0c8a1d809b1f3315f1901e524f78f057f8?width=298"
                            alt="SPI"
                            className="h-16 sm:h-18 lg:h-[74px] w-auto"
                        />
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/a9a9b8bf93a7a2457ca65f1a62d131dd77b7faf8?width=190"
                            alt="UBC"
                            className="h-20 sm:h-24 lg:h-[108px] w-auto"
                        />
                    </div>
                </section>

                <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    <h2 className="font-gelasio text-3xl sm:text-4xl lg:text-[36px] font-normal text-center mb-8 lg:mb-12 text-black">
                        Highlight
                    </h2>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 max-w-3xl mx-auto">
                        <div className="flex flex-col items-center p-8">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/3118fcd7c468afa4d380c50082f98ff720577772?width=484"
                                alt="Project preview"
                                className="w-48 sm:w-56 lg:w-[242px] h-auto mb-4"
                            />
                            <p className="font-gelasio text-sm italic text-black">
                                Landing Page
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 flex-1 p-4">
                            <p className="font-gelasio text-lg sm:text-xl text-center max-w-[173px] text-black">
                                Currently working on creating online shopping
                                experience
                            </p>
                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-4 hover:opacity-80 transition-opacity group">
                                    <ArrowIcon filled />
                                    <span className="font-gelasio text-xl sm:text-2xl text-black group-hover:text-[#667561] transition-colors">
                                        Label
                                    </span>
                                </button>
                                <button
                                    className="hover:opacity-80 transition-opacity"
                                    aria-label="GitHub"
                                >
                                    <GitHubIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="projects"
                    className="w-full max-w-7xl px-4 sm:px-6 lg:px-36 py-12 lg:py-16"
                >
                    <h2 className="font-gelasio text-3xl sm:text-4xl lg:text-[36px] font-normal text-center mb-8 lg:mb-12 text-black">
                        Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="border border-[#667561] p-3 flex flex-col gap-3 hover:shadow-lg transition-shadow"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full aspect-[139/99] object-cover border border-black"
                                />
                                <h3 className="font-gelasio text-3xl lg:text-[36px] font-normal text-black">
                                    {project.title}
                                </h3>
                                <p className="font-gelasio text-lg sm:text-xl font-normal text-black">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-1">
                                    <button className="flex items-center gap-3 hover:opacity-80 transition-opacity group pr-4">
                                        <ArrowIcon />
                                        <span className="font-gelasio text-xl sm:text-2xl text-black group-hover:text-[#667561] transition-colors">
                                            Try it
                                        </span>
                                    </button>
                                    <button
                                        className="hover:opacity-80 transition-opacity"
                                        aria-label="GitHub"
                                    >
                                        <GitHubIcon />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="w-full border-t border-[#667561] py-6 px-4 sm:px-6 lg:px-24">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h2 className="font-fell text-2xl sm:text-3xl lg:text-[38px] text-black">
                        Le journal d'Akim
                    </h2>
                    <div className="flex items-center gap-4">
                        <p className="font-gelasio text-lg sm:text-xl text-black">
                            Check out source code for this website
                        </p>
                        <button
                            className="hover:opacity-80 transition-opacity"
                            aria-label="GitHub"
                        >
                            <GitHubIcon />
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
