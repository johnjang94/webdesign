export default function Summary() {
  return (
    <div>
      <div className="md:mx-20 my-3 space-y-5">
        <div>
          <p className="font-semibold md:text-xl">About the Project</p>
          <div className="py-5 space-y-3 md:px-8">
            <p>
              <span className="font-bold">Ruminate</span> is{" "}
              <span className="underline">a non-profit</span> connecting local
              volunteers with food producers to provide real-world feedback on{" "}
              <span className="italic">freshness</span>,{" "}
              <span className="italic">taste</span>, and{" "}
              <span className="italic">ingredients</span>. To increase
              transparency and achieve top recognition from Charity Navigator,
              the organization is revamping its website. I developed the
              registration process, enhancing the onboarding experience for
              Ruminate.
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
                <p className="text-3xl md:text-5xl">80%</p>
                <p>
                  of participants said that the UI is straight-forward and they
                  understand the procedure of onboarding.
                </p>
              </div>
            </div>
            <div className="my-10 block md:hidden">
              <p>According to the initial usability testing,</p>
              <div className="text-center space-y-3 my-10">
                <p className="text-3xl md:text-5xl">80%</p>
                <p>
                  of participants said that the UI is straight-forward and they
                  understand the procedure of onboarding.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="mx-auto text-center justify-center">
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
            </div> */}
        </section>
      </div>
    </div>
  );
}
