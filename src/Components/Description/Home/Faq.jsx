const Faq = () => {
  return (
    <div>
      <h2 className="text-center mt-20 font-bold text-5xl">
        Asked <span className="text-amber-400">Questions</span>
      </h2>
      <div className="space-y-5 mt-5">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-2xl font-bold">
          Which car brands are available on our website?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">
            We offer a wide range of car brands, including but not limited to
            popular brands like Toyota, Ford, Honda, Nissan, BMW, Mercedes-Benz,
            and many more. You can explore our inventory to find the specific
            brands and models you are interested in.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-bold">
          Can you purchase cars directly from our website?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">
            Yes, our website is designed for car buyers. You can explore our
            inventory of different car brands, view detailed information about
            each vehicle, and, when you find the one you like, contact us to
            start the purchasing process.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-bold">
        Do we provide information on financing and warranty options for these cars?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">Yes, we offer information on financing and warranty options for the cars listed on our website. Each cars listing includes details about available financing plans, and you can also find information about the manufacturers warranties. Feel free to contact our customer support if you have specific questions about financing or warranties for a particular brand or model.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-bold">
        Are the cars on our website inspected and certified?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">Yes, we take quality and safety seriously. The cars listed on our website go through a rigorous inspection process to ensure they meet our standards. While we do not provide certifications ourselves, many of the cars may come with manufacturer warranties or additional certification options. Feel free to inquire about the specific cars you are interested in for more details on their condition and any available warranties or certifications.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Faq;
