import Link from "next/link";

const About = () => {
    return (
        <div className="flex gap-5">
            <Link href="/about/history">History</Link>
            <Link href="/about/mission">Mission</Link>
        </div>
    );
};

export default About;