export default function Summary() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold md:text-xl">About the Project</p>
          <div className="py-5 space-y-3 md:px-8">
            <p>
              Kadena Blockchain Web Explorer is a web-based project aimed to
              create intuitive layouts for transaction trends, history of traded
              NFTs, verified NFT properties, NFT creator profiles, etc.
              Collaborating closely with the UX Design team, I translated design
              languages into aesthetic UI while aiming to boost brand visibility
              by 15%, especially working on{" "}
              <span className="font-bold">home page</span>,{" "}
              <span className="font-bold">display of transactions</span>, and{" "}
              <span className="font-bold">NFT Dashboard</span>.
            </p>
          </div>
        </div>

        {/* Outcome */}
        <section>
          <div>
            <p className="font-semibold">Outcome</p>
            <div className="flex-col grid-cols-2 my-5 hidden md:block">
              <p className="px-10">
                According to the initial usability testing,
              </p>
              <div className="text-center space-y-3 my-10">
                <p>It took about</p>
                <p className="text-3xl md:text-5xl">15 seconds</p>
                <p>for the users to find information they are looking for</p>
              </div>
              <div className="text-center space-y-3 my-12">
                <p className="text-3xl md:text-5xl">80%</p>
                <p>of participants preferred the new design</p>
              </div>
            </div>
            <div className="my-10 block md:hidden">
              <p>According to the initial usability testing,</p>
              <div className="text-center space-y-3 my-10">
                <p>It took about</p>
                <p className="text-3xl md:text-5xl">15 seconds</p>
                <p>for the users to find information they are looking for</p>
              </div>
              <div className="text-center space-y-3 my-12">
                <p className="text-3xl md:text-5xl">80%</p>
                <p>of participants preferred the new design</p>
              </div>
            </div>
          </div>
          <div className="mx-auto text-center justify-center">
            <button
              onClick={() => {
                const element = document.getElementById("product-showcase");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <p className="text-blue-500 underline">
                Click here to skip down to the live demo!
              </p>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
