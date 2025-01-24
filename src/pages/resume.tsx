import Link from "next/link";
import Image from "next/image";
import resumeImage from "../assets/resume/web-designer.png";

const Resume: React.FC = () => {
  return (
    <section>
      <p className="text-center mt-10 md:text-2xl">
        The following image is my sample resume.
      </p>
      <div className="my-5">
        <div className="md:flex md:items-center md:text-center md:gap-1 md:justify-center hidden">
          <p>Please reach out to me</p>
          <Link href="/contact">
            <p className="text-blue-500">here</p>
          </Link>
          <p>
            for the most up-to-date information and to get the password to
            unlock the locked projects.
          </p>
        </div>
        <div className="flex items-center text-center gap-1 justify-center md:hidden">
          <p>Check out the latest version</p>
          <Link href="/contact">
            <p className="text-blue-500">here</p>
          </Link>
        </div>
      </div>
      <div className="my-10 mx-12 md:mx-0">
        <Image
          src={resumeImage}
          alt="Resume"
          width={1250}
          height={850}
          className="mx-auto rounded-3xl"
        />
      </div>
      <div className="md:flex md:items-center md:text-center md:gap-1 md:justify-center hidden">
        <p>Please reach out to me</p>
        <Link href="/contact">
          <p className="text-blue-500">here</p>
        </Link>
        <p>
          for the most up-to-date information and to get the password to unlock
          the locked projects.
        </p>
      </div>
      <div className="flex items-center text-center gap-1 justify-center md:hidden">
        <p>Check out the latest version</p>
        <Link href="/contact">
          <p className="text-blue-500">here</p>
        </Link>
      </div>
    </section>
  );
};

export default Resume;
