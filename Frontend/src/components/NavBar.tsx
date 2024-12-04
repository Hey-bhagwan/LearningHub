import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";

export function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 990 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                
            >
                <a href="/About" className="flex items-center">
                    About
                </a>
            </Typography>
            
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
            >
                <a href="/Docs" className="flex items-center">
                    Docs
                </a>
            </Typography>
        </ul>
    );

    return (
        <div className="-m-6 max-h-[768px] w-screen">
            <Navbar
                className="sticky top-0 z-10 h-max max-w-5/6 rounded-none px-4 py-2 lg:px-8 lg:py-4"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
            >
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="/"
                        className="mr-4 cursor-pointer py-1.5 text-xl font-bold"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                    >
                        Learning Hub
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center gap-x-1">
                            <a href="/Login">
                            <Button
                                variant="text"
                                size="sm"
                                className="hidden lg:inline-block"
                                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                            >
                                <span>Log In</span>
                            </Button>
                            </a>
                            <a href="/Register">
                            <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block"
                                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                            >
                                <span>Register</span>
                            </Button>
                            </a>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <a href="/Login">
                            <Button
                                fullWidth
                                variant="text"
                                size="sm"
                                className=""
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                            >
                                <span>Log In</span>
                            </Button>
                        </a>
                        <a href="/Register">
                        <Button 
                            fullWidth variant="gradient" 
                            size="sm" 
                            className=""
                            placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                            >
                            <span>Register</span>
                        </Button>
                        </a> 
                    </div>
                </MobileNav>
            </Navbar>
            <div className="mx-auto max-w-screen-md py-12">
                <Card 
                    className="mb-12 overflow-hidden"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                >
                    <img
                        alt="nature"
                        className="h-[32rem] w-full object-cover object-center"
                        src="https://i.ytimg.com/vi/jCgxb8ibLjE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGD8gTyhlMA8=&rs=AOn4CLBhp0CGUOgEeB9XfNUwTU22dcUjFA"
                    />
                </Card>
                <Typography variant="h2" color="blue-gray" className="mb-2" placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}>
                    What is Learning Hub
                </Typography>
                <Typography color="gray" className="font-normal" placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}>
                    Welcome to <b>Learning Hub</b>, your gateway to mastering the skills of tomorrow, today! Whether you're an aspiring fullstack developer, a machine learning enthusiast, or an app development aficionado, we've got you covered. Dive into our comprehensive courses, designed by industry experts, to help you unlock your potential and achieve your dreams.

                    At <b>Learning Hub</b>, we believe in the power of knowledge and its ability to transform lives. Our interactive and engaging courses are tailored to suit all learning styles and levels, ensuring that you not only learn but also thrive in your chosen field. Join our vibrant community of learners and embark on a journey of discovery, innovation, and growth.

                    Ready to take the next step in your learning adventure? Enroll now and let <b>Learning Hub</b> be your trusted partner in education. Let's build a brighter future, together!
                </Typography>
            </div>
        </div>
    );
}