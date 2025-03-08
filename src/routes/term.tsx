import { createFileRoute, Link } from "@tanstack/react-router";
import term1 from "../assets/term1.png";

export const Route = createFileRoute("/term")({
  component: TermComponent,
});

function TermComponent() {
  return (
    <div className="h-full text-black bg-white pb-10 md:my-0 mt-0 md:px-32">
      <div className="mt-17 max-sm:mt-17 max-sm:px-7">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-green-300"
            >
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <Link
                to="/community"
                className="ml-1 text-sm font-medium text-gray-500 hover:text-green-300 md:ml-2"
              >
                Community
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                Terms & Conditions
              </span>
            </div>
          </li>
        </ol>
      </div>
      <div className="pt-15  grid grid-cols-2 sm:grid=cols-6 max-sm:pt-10 ">
        <div className="col-span-1 max-sm:col-span-full max-sm:flex max-sm:justify-center">
          <h1 className="text-black font-bold text-3xl max-sm:pl-5">
            Terms & Conditions
          </h1>
        </div>

        <div className="col-span-1 row-span-2 max-sm:col-span-full max-sm:mt-10 max-sm:flex max-sm:justify-center">
          <img src={term1} alt="" className="w-[525px] sm:pl-20" />
        </div>

        <div className="col-span-1 row-span-2 max-sm:col-span-full mt-10">
          <p className="text-black text-md max-sm:pl-5 text-lg">
            Please read and understand these terms and conditions before using
            ReLeaf Fashion services. By accessing or using this site, you agree
            to all applicable terms related to the features provided, including
            preloved marketplace, donations, and community.
          </p>
        </div>
      </div>

      <div className=" space-y-5 max-sm:px-5">
        <h1 className="text-black font-bold text-3xl">Introduction</h1>
        <p className="text-black mt-5 text-lg">
          Welcome to ReLeaf Fashion! This platform aims to support sustainable
          lifestyles through the exchange and sale of preloved clothing, as well
          as clothing donation initiatives. By using this website, you agree to
          the following terms and conditions.
        </p>
        <h1 className="text-black font-bold text-3xl">Services Provided</h1>
        <p className="text-black text-lg">Releaf Fashion provides:</p>
        <ol className="list-outside list-decimal pl-4 md:pl-4">
          <li>
            <span className="font-bold text-lg">Marketplace :</span> A place to
            find and sell preloved clothing, allowing users to find more
            sustainable fashion options. Showcasing a gallery of preloved
            clothing available for exchange. Transactions are made directly by
            users without platform intervention.
          </li>
          <li>
            <span className="font-bold text-lg">Learn & Act :</span> Access to a
            variety of educational materials about sustainable fashion as well
            as a guide to donating clothes that are still fit to wear.
          </li>
          <li>
            <span className="font-bold text-lg">Community :</span> Space for
            users to connect through discussion forums, share experiences, and
            get the latest information on sustainable lifestyles.
          </li>
        </ol>
        <h1 className="font-bold text-3xl">Donation Terms</h1>
        <ol className="list-outside list-decimal pl-4 md:pl-4">
          <li className="text-lg">
            Users can contact the ReLeaf Fashion team through the available
            contacts to arrange donation pickup.
          </li>
          <li className="text-lg">
            Donated clothes will be distributed to those in need or recycled if
            they are no longer suitable for use.
          </li>
        </ol>
        <h1 className="font-bold text-3xl">
          Discussion Forums and Communities
        </h1>
        <ol className="list-outside list-decimal pl-4 md:pl-4">
          <li className="text-lg">
            The forum is used to share information and discussions related to
            sustainable fashion.
          </li>
          <li className="text-lg">
            Users are prohibited from posting content that contains elements of
            SARA, is discriminatory, or violates the law.
          </li>
          <li className="text-lg">
            ReLeaf Fashion reserves the right to remove content that is deemed
            not in accordance with community guidelines.
          </li>
        </ol>
        <h1 className="font-bold text-3xl">Limitation of Liability</h1>
        <ol className="list-outside list-decimal pl-4 md:pl-4">
          <li className="text-lg">
            ReLeaf Fashion only provides a platform to display information and
            is not involved in any direct transactions or exchanges.
          </li>
          <li className="text-lg">
            We are not responsible for the products displayed in the marketplace
            or clothing swap gallery.
          </li>
          <li className="text-lg">
            All transactions that occur are the full responsibility of the user.
          </li>
        </ol>
        <h1 className="font-bold text-3xl">Changes and Updates</h1>
        <p className="text-lg">
          We reserve the right to update or change these terms and conditions at
          any time. Changes will be notified through the website.
        </p>
        <h1 className="font-bold text-3xl">Contact</h1>
        <p className="text-lg">
          If you have any questions regarding these terms and conditions, please
          contact us via the contact details provided on the website.
        </p>
      </div>
    </div>
  );
}
